import { Client, Databases, ID, Query } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;

// Check if Appwrite is configured
const isAppwriteConfigured = () => {
  return !!(DATABASE_ID && COLLECTION_ID && PROJECT_ID);
};

let client: Client | null = null;
let database: Databases | null = null;

if (isAppwriteConfigured()) {
  client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(PROJECT_ID!);
  database = new Databases(client);
}

export const updateSearchCount = async (query: string, movie: Movie) => {
  if (!isAppwriteConfigured() || !database) {
    console.log("Appwrite not configured - skipping search count update");
    return;
  }

  try {
    const result = await database.listDocuments(DATABASE_ID!, COLLECTION_ID!, [
      Query.equal("searchTerm", query),
    ]);

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];
      await database.updateDocument(
        DATABASE_ID!,
        COLLECTION_ID!,
        existingMovie.$id,
        {
          count: existingMovie.count + 1,
        }
      );
    } else {
      await database.createDocument(DATABASE_ID!, COLLECTION_ID!, ID.unique(), {
        searchTerm: query,
        movie_id: movie.id,
        title: movie.title,
        count: 1,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
    // Don't throw - allow app to continue without Appwrite
  }
};

export const getTrendingMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  if (!isAppwriteConfigured() || !database) {
    console.log("Appwrite not configured - trending movies unavailable");
    return undefined;
  }

  try {
    const result = await database.listDocuments(DATABASE_ID!, COLLECTION_ID!, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);

    return result.documents as unknown as TrendingMovie[];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
