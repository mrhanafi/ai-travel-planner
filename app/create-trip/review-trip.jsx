import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation,useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";

const ReviewTrip = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text style={{ fontFamily: "bold", fontSize: 35, marginTop: 20 }}>
        Review my trip
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "bold", fontSize: 20 }}>
          Before generating your trip, please review your selection
        </Text>
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
          {/* Destination Info */}
          <Text style={{ fontSize: 30 }}>📍</Text>
          <View>
            <Text
              style={{ fontFamily: "regular", fontSize: 20, color: "gray" }}
            >
              Destination
            </Text>
            <Text style={{ fontFamily: "medium", fontSize: 20 }}>
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        {/* Date selected Info */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>🗓️</Text>
          <View>
            <Text
              style={{ fontFamily: "regular", fontSize: 20, color: "gray" }}
            >
              Travel Date
            </Text>
            <Text style={{ fontFamily: "medium", fontSize: 20 }}>
              {moment(tripData?.startDate).format("DD/MM/YYYY") +
                " - " +
                moment(tripData?.endDate).format("DD/MM/YYYY") +
                " "}
              ({tripData?.totalNumberOfDays + " days"})
            </Text>
          </View>
        </View>

        {/* Travelers Info */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>🚌</Text>
          <View>
            <Text
              style={{ fontFamily: "regular", fontSize: 20, color: "gray" }}
            >
              Who Is Traveling
            </Text>
            <Text style={{ fontFamily: "medium", fontSize: 20 }}>
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>

        {/* Budget Info */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>💸</Text>
          <View>
            <Text
              style={{ fontFamily: "regular", fontSize: 20, color: "gray" }}
            >
              My Budget
            </Text>
            <Text style={{ fontFamily: "medium", fontSize: 20 }}>
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 40,
        }}
          onPress={() => router.replace('/create-trip/generate-trip')}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "medium",
            fontSize: 20,
          }}
        >
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewTrip;
