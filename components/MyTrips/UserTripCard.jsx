import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";

const UserTripCard = ({ trip }) => {
  const latestTrip = trip?.tripData;
  //   const latestTrip = JSON.parse(trip?.tripData);
  const formatData = () => {};
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        width: "70%",
      }}
    >
      {latestTrip?.locationInfo?.photoRef ? (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${latestTrip?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
            // uri: `https://places.googleapis.com/v1/${latestTrip?.locationInfo?.photoRef}/media?key=AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE&maxHeightPx=240`,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 15,
          }}
        />
      ) : (
        <Image
          source={require("./../../assets/images/placeholder.jpeg")}
          style={{ width: 100, height: 100, borderRadius: 15 }}
        />
      )}
      <View>
        <Text style={{ fontFamily: "medium", fontSize: 18 }}>
          {latestTrip?.locationInfo?.name}
        </Text>
        <Text style={{ fontFamily: "regular", fontSize: 14, color: "gray" }}>
          {/* {moment(latestTrip?.startDate).format("DD MMM YYYY")} */}
          {latestTrip?.startDate}
        </Text>
        <Text style={{ fontFamily: "regular", fontSize: 14, color: "gray" }}>
          Traveling: {latestTrip?.traveler?.title}
        </Text>
      </View>
    </View>
  );
};

export default UserTripCard;
