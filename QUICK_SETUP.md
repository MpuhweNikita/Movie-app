# Quick Setup Guide

## ✅ What's Already Done
- ✅ All npm packages installed
- ✅ Appwrite is now optional (app works without it)
- ✅ Code updated to handle missing credentials gracefully

## 🔑 Get Your Free TMDB API Key (2 minutes)

**The app needs a TMDB API key to fetch movie data. It's FREE and takes 2 minutes:**

1. **Go to**: https://www.themoviedb.org/signup
2. **Create a free account** (or login if you have one)
3. **Go to**: https://www.themoviedb.org/settings/api
4. **Click "Request API Key"**
5. **Fill out the form:**
   - Type: Developer
   - Application name: Movie App (or any name)
   - Application URL: http://localhost (or your URL)
   - Description: Personal project
6. **Copy your API key** (it will look like: `abc123def456...`)

## 📝 Update Your .env File

Open `react-native-movie-app-main/.env` and add your TMDB API key:

```env
EXPO_PUBLIC_MOVIE_API_KEY=your_api_key_here
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=
```

**Note**: You can leave the Appwrite fields empty - the app will work without them (you just won't see trending movies).

## 🚀 Run the App

```bash
cd react-native-movie-app-main
npx expo start
```

Then:
- Scan the QR code with Expo Go app on your phone, OR
- Press `a` for Android emulator, `i` for iOS simulator, or `w` for web

## 🎬 What Works Without Appwrite

✅ Browse popular movies  
✅ Search for movies  
✅ View movie details  
❌ Trending movies section (requires Appwrite)

## 💡 Optional: Set Up Appwrite (For Trending Movies)

If you want the trending movies feature:

1. Go to https://cloud.appwrite.io/
2. Create a free account
3. Create a new project
4. Create a database
5. Create a collection with these attributes:
   - `searchTerm` (string)
   - `movie_id` (integer)
   - `title` (string)
   - `count` (integer)
   - `poster_url` (string)
6. Copy your Project ID, Database ID, and Collection ID to `.env`

---

**That's it! The app should work now! 🎉**

