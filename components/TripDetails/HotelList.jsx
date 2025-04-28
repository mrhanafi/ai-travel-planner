import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { GetPhotoRef } from "../../services/GooglePlaceApi";
import HotelCard from "./HotelCard";

const HotelList = ({ hotelList }) => {
  //   useEffect(() => {
  //     console.log("test1");
  //     getGooglePhotoRef();
  //     console.log("test2");
  //   }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "bold", fontSize: 20 }}>
        🛎️ Hotel Recommendation
      </Text>
      <FlatList
        data={hotelList}
        renderItem={({ item, index }) => <HotelCard item={item} />}
        style={{ marginTop: 8 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HotelList;
