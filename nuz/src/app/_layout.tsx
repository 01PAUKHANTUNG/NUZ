
import { Stack } from "expo-router";


export default function RootLayout() {
  return <Stack 
  screenOptions={{
    headerTitle : 'National University of Zoland'
  }}>

 
    <Stack.Screen name="index"  />
    <Stack.Screen name='assignment' />
    <Stack.Screen name='download' />
    <Stack.Screen name='profile' />

  </Stack>;
}
