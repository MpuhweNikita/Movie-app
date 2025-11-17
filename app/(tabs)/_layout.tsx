import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: { focused?: boolean; icon?: any; title?: string }) => {
  if (focused) {
    return (
      <View className="flex-1 justify-center items-center">
        <ImageBackground
          source={images.highlight}
          className="flex-row items-center justify-center px-4 py-2 rounded-full"
        >
          <Image source={icon} tintColor="#151312" className="size-5" />
          <Text className="text-secondary text-base font-semibold ml-2">
            {title}
          </Text>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center py-3">
      <Image source={icon} className="size-5" tintColor="#A8B5DB" />
    </View>
  );
};



const _layout = () => {
  return (
    <Tabs
       screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle:{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        tabBarStyle:{
            backgroundColor:'#0f0D23',
            borderRadius:50,
            marginHorizontal: 20,
            marginBottom: 36,
            height:52,
            position:'absolute',
            overflow:'hidden',
            borderWidth:1,
            borderColor:'#0f0D23',
        }
       }
       }
    >
        <Tabs.Screen
           name = "index"
           options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({focused}) => (
                   <TabIcon 
                      focused={focused} 
                      icon={icons.home} 
                      title="Home" />
              )
           }}
        />
        <Tabs.Screen
           name = "search"
           options={{
              title: "Search",
              headerShown: false,
              tabBarIcon: ({focused}) => (
                   <TabIcon 
                      focused={focused} 
                      icon={icons.search} 
                      title="Search" />
              )
           }}
        />
        <Tabs.Screen
            name="saved"
            options={{
                title: "saved",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon
                      focused={focused} 
                      icon={icons.save} 
                      title="Save"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "profile",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon
                      focused={focused} 
                      icon={icons.person} 
                      title="Profile"
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout