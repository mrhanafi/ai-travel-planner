import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const StartNewTripCard = () => {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text
        style={{
          fontSize: 20,
          fontFamily: "medium",
          textAlign: "center",
          //   color: "gray",
        }}
      >
        No trip planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "medium",
          textAlign: "center",
          color: "gray",
        }}
      >
        Looks like its time to plan a new travel experience! Get started below
      </Text>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
        onPress={() => router.push("/create-trip/search-place")}
      >
        <Text style={{ color: "white", fontFamily: "medium", fontSize: 17 }}>
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartNewTripCard;
