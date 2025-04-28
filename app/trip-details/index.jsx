import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlanTrip from "../../components/TripDetails/PlanTrip";

const TripDetails = () => {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);
  const [tripData, setTripData] = useState({});

  const formatData = (data) => {
    return JSON.parse(data);
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });

    setTripDetails(JSON.parse(trip));
    // setTripData(JSON.parse(tripDetails?.tripData));
    // console.log("tripDetails", trip);
    // console.log("tripDetails", JSON.parse(trip)?.tripPlan[0]?.flightDetails);
    // console.log("tripData", JSON.parse(trip));
    // console.log("photoref", formatData(trip?.));
  }, []);
  //   console.log("trip", JSON.parse(tripDetails?.tripData)?.locationInfo);
  //   console.log("flight", tripDetails?.tripPlan);
  //   console.log("flight", JSON.parse(trip)?.tripPlan[0]?.flightDetails);
  return (
    tripDetails && (
      <ScrollView>
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripDetails?.tripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
            // uri: `https://places.googleapis.com/v1/${latestTrip?.locationInfo?.photoRef}/media?key=AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE&maxHeightPx=240`,
          }}
          style={{
            width: "100%",
            height: 330,
            // borderRadius: 15,
          }}
        />
        <View
          style={{
            padding: 15,
            backgroundColor: "white",
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text style={{ fontSize: 25, fontFamily: "bold" }}>
            {/* {formatData(tripDetails.tripData)?.locationInfo?.name} */}
            {tripDetails?.tripData?.locationInfo?.name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 5,
            }}
          >
            <Text
              style={{ fontFamily: "regular", fontSize: 18, color: "gray" }}
            >
              {tripDetails?.tripData?.startDate}
              {/* {moment(formatData(tripDetails.tripData)?.startDate).format(
                "DD MMM YYYY"
              )} */}
              {/* {moment(JSON.parse(tripDetails?.tripData).startDate).format(
                "DD MMM YYYY"
              )} */}
              -
            </Text>
            <Text
              style={{ fontFamily: "regular", fontSize: 18, color: "gray" }}
            >
              {tripDetails?.tripData?.endDate}
              {/* {moment(formatData(tripDetails.tripData)?.endDate).format(
                "DD MMM YYYY"
              )} */}
              {/* {moment(JSON.parse(tripDetails?.tripData).endDate).format(
                "DD MMM YYYY"
              )} */}
            </Text>
          </View>
          <Text style={{ fontFamily: "regular", fontSize: 17, color: "gray" }}>
            🚌 {tripDetails.tripData?.traveler?.title}
          </Text>

          {/* flight Info */}
          <FlightInfo
            flightData={JSON.parse(trip)?.tripPlan[0]?.flightDetails}
          />
          {/* hotel list */}
          <HotelList hotelList={JSON.parse(trip)?.tripPlan[0]?.hotelOptions} />
          {/* itinerary */}
          <PlanTrip itinerary={JSON.parse(trip)?.tripPlan[0]?.itinerary} />
        </View>
      </ScrollView>
    )
  );
};

export default TripDetails;
