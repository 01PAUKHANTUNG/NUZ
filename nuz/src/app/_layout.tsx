import NUZProvider from "@/context/NUZContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <NUZProvider>
    <Stack
      screenOptions={{
        headerTitle: "National University of Zoland",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="assignment" />
      <Stack.Screen name="download" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="login" />
    </Stack>
    </NUZProvider>
  );
}
