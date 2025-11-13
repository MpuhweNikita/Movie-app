import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: { focused?: boolean; icon?: any; title?: string }) => {
    return (
        <ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-w-[100px] min-h-10 mt-4 justify-center items-center rounded-full overflow-hidden '>
          <Image source={icon ?? icons.home}
                    tintColor="#151312" className='size-5'/>
                    <Text className='text-secondary text-base font-semibold ml-2'>{title ?? 'Home'}</Text>
                  </ImageBackground>
    )
}

const _layout = () => {
  return (
    <Tabs>
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