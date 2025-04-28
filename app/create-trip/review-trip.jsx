import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
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

  // const test = {
  //   "budget": "Moderate",
  //   "endDate": "2025-05-04T04:00:00.000Z",
  //   "locationInfo": {
  //     "coordinates": {
  //       "lat": 9.5214157,
  //       "lng": 100.0482144
  //     },
  //     "name": "Koh Samui, Ko Samui District, Surat Thani, Thailand",
  //     "photoRef": "AeeoHcL-HdoifvceEM7mumQwEjOI0FuoU7z01QTywHzT9X7KFD_kwCC0SGh97dizD-pCbeFk-3z8J9H0BtspMJT7WqKz94jmpSWYlfxwhQ1XCKVTe41du6ePJQlRfmhwv2127vgrTBZoQPRS7OEJC4mtpwF7TFzcT_g9t1M3jwoHO9b5gFx0WznhWV4jEflJZk5JHR2OeuOYDtsljFCrqfrWpZxCevYw46N81F7uTeDyRzGnLZQVN15Xs0JJXgfsQdiPrsE7Wafl5g4gEjgTkfqhqsa-JN0V7XFO40cq_SWH_sxMHogZ67wPPBpIe81xuV61TV3FFSUuL1xgzDDaVMcCM7FIL8cmuEgDjTkC9vIG1OfFzBcj8pBcvRZbEEjZkGmvoLN0tdDykinje2q6OtCl1HiMfJYPgeanvOHxnFJHjeRAVXiWJzMNencmwnjUi8bXhlu66dbKuVcKAKrnAOaSWXMEHPZJHPznyWX__QABMWyJ0BM6V0DHHN0tll8hdRiWH06RSpasl_guOJZkxIXnW1WtUbdDzmYJdPrg8W3Oc55qwmCvs_kWZgUFLJl_Fx45mV4jp-UBXKdX2js0DnBAlLBUR9h1qfQ1SZU2TuRAmGx0P3CFIY5Q5IbBkXGm7kp-T1A3SKeO",
  //     "url": "https://maps.google.com/?q=Koh+Samui,+Ko+Samui+District,+Surat+Thani,+Thailand&ftid=0x3054f1501c662673:0x30223bc2c3680d0"
  //   },
  //   "startDate": "2025-05-02T04:00:00.000Z",
  //   "totalNumberOfDays": 3,
  //   "traveler": {
  //     "desc": "Two travelers in tandem",
  //     "icon": "👩‍❤️‍👨",
  //     "id": 2,
  //     "people": "2 Peoples",
  //     "title": "A Couple"
  //   }
  // }

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
              {tripData?.startDate + " - " + tripData?.endDate}
              {/* {moment(tripData?.startDate).format("DD/MM/YYYY") +
                " - " +
                moment(tripData?.endDate).format("DD/MM/YYYY") +
                " "} */}
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
        // onPress={() => console.log(tripData)}
        onPress={() => router.replace("/create-trip/generate-trip")}
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
