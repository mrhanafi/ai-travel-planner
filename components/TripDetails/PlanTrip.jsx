import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

const PlanTrip = ({ itinerary }) => {
  const [photoRef, setPhotoRef] = useState();
  //   useEffect(() => {
  //     //   console.log("test1");
  //     getGooglePhotoRef("Chaweng Beach");
  //     //   console.log("test2");
  //   }, []);

  const getGooglePhotoRef = async (placeName) => {
    const result = await GetPhotoRef(placeName);
    // setPhotoRef(result?.data?.places[0]?.photos);
    console.log(result?.data?.places[0]?.photos[0]?.name);
    // await GooglePlaceApi.GetPhotoRef("Kuala Lumpur,Malaysia").then((resp) => {
    //   console.log(resp.data.places);
    // });
    return result?.data?.places[0]?.photos[0]?.name;
  };
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: "bold" }}>🧩 Plan Details</Text>

      {Object.entries(itinerary)
        .reverse()
        .map(([day, details, index]) => (
          <View>
            <Text style={{ fontFamily: "medium", fontSize: 20, marginTop: 20 }}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </Text>
            <View>
              <Text style={{ fontFamily: "bold", fontSize: 17 }}>Morning</Text>
              <View
                style={{
                  // borderWidth: 1,
                  backgroundColor: Colors.LIGHT_BLUE,
                  padding: 5,
                  borderRadius: 15,
                  borderColor: "gray",
                  marginTop: 10,
                }}
              >
                {/* {details?.morning?.placeImageURL ? (
                  <Image
                    source={{
                      uri:
                        "https://places.googleapis.com/v1/" +
                        `${getGooglePhotoRef(
                          details?.morning?.placeName
                        )}/media` +
                        "?maxHeightPx=240" +
                        `&key=AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE`,
                    }}
                    style={{ width: "100%", height: 100, borderRadius: 15 }}
                  />
                ) : ( */}
                <Image
                  source={require("./../../assets/images/placeholder.jpeg")}
                  style={{ width: "100%", height: 100, borderRadius: 15 }}
                />
                {/* // )} */}
                <View style={{ marginTop: 5 }}>
                  <Text style={{ fontFamily: "bold", fontSize: 20 }}>
                    {details?.morning?.placeName}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "regular",
                      fontSize: 17,
                      color: "gray",
                    }}
                  >
                    {details?.morning?.placeDetails}
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontFamily: "regular",
                        fontSize: 17,
                        marginTop: 5,
                      }}
                    >
                      🎫 Ticket Price: {details?.morning?.ticketPricing}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "regular",
                        fontSize: 17,
                        marginTop: 5,
                      }}
                    >
                      ⌚ Time To Travel: {details?.morning?.timeToTravel}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "black",
                      padding: 5,
                      borderRadius: 15,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      width: 110,
                      marginTop: 20,
                    }}
                  >
                    <Ionicons
                      name="navigate-circle-outline"
                      size={24}
                      color="white"
                    />
                    <Text style={{ color: "white" }}>Navigate</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: "bold", fontSize: 17 }}>
                Afternoon
              </Text>
              <View
                style={{
                  // borderWidth: 1,
                  backgroundColor: Colors.LIGHT_BLUE,
                  padding: 5,
                  borderRadius: 15,
                  borderColor: "gray",
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("./../../assets/images/placeholder.jpeg")}
                  style={{ width: "100%", height: 100, borderRadius: 15 }}
                />
                <View style={{ marginTop: 5 }}>
                  <Text style={{ fontFamily: "bold", fontSize: 20 }}>
                    {details?.afternoon?.placeName}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "regular",
                      fontSize: 17,
                      color: "gray",
                    }}
                  >
                    {details?.afternoon?.placeDetails}
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontFamily: "regular",
                        fontSize: 17,
                        marginTop: 5,
                      }}
                    >
                      🎫 Ticket Price: {details?.afternoon?.ticketPricing}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "regular",
                        fontSize: 17,
                        marginTop: 5,
                      }}
                    >
                      ⌚ Time To Travel: {details?.afternoon?.timeToTravel}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "black",
                      padding: 5,
                      borderRadius: 15,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      width: 110,
                      marginTop: 20,
                    }}
                  >
                    <Ionicons
                      name="navigate-circle-outline"
                      size={24}
                      color="white"
                    />
                    <Text style={{ color: "white" }}>Navigate</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: "bold", fontSize: 17 }}>Evening</Text>
              <View
                style={{
                  // borderWidth: 1,
                  backgroundColor: Colors.LIGHT_BLUE,
                  padding: 5,
                  borderRadius: 15,
                  borderColor: "gray",
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("./../../assets/images/placeholder.jpeg")}
                  style={{ width: "100%", height: 100, borderRadius: 15 }}
                />
                <View style={{ marginTop: 5 }}>
                  <Text style={{ fontFamily: "bold", fontSize: 20 }}>
                    {details?.evening?.placeName}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "regular",
                      fontSize: 17,
                      color: "gray",
                    }}
                  >
                    {details?.evening?.placeDetails}
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontFamily: "regular",
                        fontSize: 17,
                        marginTop: 5,
                      }}
                    >
                      🎫 Ticket Price: {details?.evening?.ticketPricing}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "regular",
                        fontSize: 17,
                        marginTop: 5,
                      }}
                    >
                      ⌚ Time To Travel: {details?.evening?.timeToTravel}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "black",
                      padding: 5,
                      borderRadius: 15,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      width: 110,
                      marginTop: 20,
                    }}
                  >
                    <Ionicons
                      name="navigate-circle-outline"
                      size={24}
                      color="white"
                    />
                    <Text style={{ color: "white" }}>Navigate</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
    </View>
  );
};

export default PlanTrip;
