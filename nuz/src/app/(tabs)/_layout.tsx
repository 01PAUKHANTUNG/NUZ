import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { NUZContext } from '@/context/NUZContext';
import Login from '../login';


export default function _layout() {
    const {token} = useContext(NUZContext);

     
  return (
    token === "" ? <Login /> : 
    <Tabs>
       
        <Tabs.Screen name="index" options={{
            headerShown: false, 
            title : 'Home',
            tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),}} />

        <Tabs.Screen name='assignment'
        options={{
            headerShown:false,
            title :'Assignment',
            tabBarIcon:({color, size})=>(
                <Ionicons name="clipboard-sharp" size={size} color={color} />
            )
        }} 
        />

        <Tabs.Screen name='download'
        options={{
            headerShown:false,
            title :'Downloads',
            tabBarIcon:({color, size})=>(
                <Ionicons name='download' size={size} color={color} />
            )
        }} 
        />

        <Tabs.Screen name='profile'
        options={{
            headerShown:false,
            title :'Profile',
            tabBarIcon:({color, size})=>(
                <Ionicons name='person' size={size} color={color} />
            )
        }} 
        />

    </Tabs>
    
  )
}