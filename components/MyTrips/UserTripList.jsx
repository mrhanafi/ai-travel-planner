import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment/moment";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

const UserTripList = ({ userTrips }) => {
  const latestTrip = userTrips[0]?.tripData;
  // const latestTrip = JSON.parse(userTrips[0]?.tripData);
  const router = useRouter();

  return (
    <View>
      <View style={{ marginTop: 20, paddingBottom: 100 }}>
        {latestTrip?.locationInfo?.photoRef ? (
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${latestTrip?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
              // uri: `https://places.googleapis.com/v1/${latestTrip?.locationInfo?.photoRef}/media?key=AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE&maxHeightPx=240`,
            }}
            style={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        ) : (
          <Image
            source={require("./../../assets/images/placeholder.jpeg")}
            style={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        )}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "medium", fontSize: 20 }}>
            {latestTrip?.locationInfo?.name}
            {/* {userTrips[0]?.tripPlan?.location?.name} */}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{ fontFamily: "regular", fontSize: 17, color: "gray" }}
            >
              {latestTrip?.startDate}
              {/* {moment(latestTrip?.startDate).format("DD MMM YYYY")} */}
            </Text>
            <Text
              style={{ fontFamily: "regular", fontSize: 17, color: "gray" }}
            >
              🚌 {latestTrip?.traveler?.title}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
            }}
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: {
                  trip: JSON.stringify(userTrips[0]),
                },
              })
            }
          >
            <Text
              style={{
                color: "white",
                fontFamily: "medium",
                textAlign: "center",
              }}
            >
              See your plan
            </Text>
          </TouchableOpacity>
        </View>

        {userTrips.map((trip, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: {
                  trip: JSON.stringify(trip),
                },
              })
            }
          >
            <UserTripCard trip={trip} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default UserTripList;
