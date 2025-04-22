import { View, Text } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "bold", fontSize: 35 }}>My Trip</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {userTrips?.length === 0 ? <StartNewTripCard /> : null}
    </View>
  );
};

export default MyTrip;
