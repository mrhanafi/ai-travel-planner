import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-get-random-values";
import { CreateTripContext } from "../context/CreateTripContext";
import { useState } from "react";
export default function RootLayout() {
  useFonts({
    regular: require("./../assets/fonts/Outfit-Regular.ttf"),
    medium: require("./../assets/fonts/Outfit-Medium.ttf"),
    bold: require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  const [tripData, setTripData] = useState([]);
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="index" /> */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
