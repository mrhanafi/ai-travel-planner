import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

const HotelCard = ({ item }) => {
  const [photoRef, setPhotoRef] = useState();
  useEffect(() => {
    //   console.log("test1");
    getGooglePhotoRef();
    //   console.log("test2");
  }, []);
  const getGooglePhotoRef = async () => {
    const result = await GetPhotoRef(item.hotelName);
    setPhotoRef(result?.data?.places[0]?.photos);
    console.log(result?.data?.places[0]?.photos);
    // await GooglePlaceApi.GetPhotoRef("Kuala Lumpur,Malaysia").then((resp) => {
    //   console.log(resp.data.places);
    // });
  };
  return (
    <View style={{ marginRight: 20, width: 180 }}>
      {photoRef ? (
        <Image
          source={{
            uri:
              "https://places.googleapis.com/v1/" +
              `${photoRef[0]?.name}/media` +
              "?maxHeightPx=240" +
              `&key=AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE`,
          }}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            borderRadius: 15,
          }}
        />
      ) : (
        <Image
          source={require("./../../assets/images/placeholder.jpeg")}
          style={{ width: 180, height: 120, borderRadius: 15 }}
        />
      )}

      <View style={{ padding: 5 }}>
        <Text style={{ fontFamily: "medium", fontSize: 17 }}>
          {item.hotelName}
        </Text>
        <View>
          <Text style={{ fontFamily: "regular" }}>⭐ {item?.rating}</Text>
          <Text style={{ fontFamily: "regular" }}>💰 {item?.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default HotelCard;
