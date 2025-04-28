import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const FlightInfo = ({ flightData }) => {
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "bold", fontSize: 20 }}>✈️ Flights</Text>

        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 5,
            width: 100,
            borderRadius: 7,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "regular",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontFamily: "regular", fontSize: 17, marginTop: 10 }}>
        Price: {flightData?.flightPrice?.price}
      </Text>
    </View>
  );
};

export default FlightInfo;
