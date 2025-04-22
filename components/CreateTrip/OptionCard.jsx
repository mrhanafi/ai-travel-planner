import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const OptionCard = ({ option, selectedOption }) => {
  return (
    <View
      style={[
        {
          padding: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
        },
        selectedOption?.id == option?.id && { borderWidth: 3 },
      ]}
    >
      <View>
        <Text style={{ fontSize: 20, fontFamily: "bold" }}>{option.title}</Text>
        <Text style={{ fontSize: 17, fontFamily: "regular", color: "gray" }}>
          {option.desc}
        </Text>
      </View>
      <Text style={{ fontSize: 40 }}>{option.icon}</Text>
    </View>
  );
};

export default OptionCard;
