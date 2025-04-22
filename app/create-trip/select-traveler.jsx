import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { SelectTravelList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";

const SelectTraveler = () => {
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({
      ...tripData,
      traveler: selectedTraveler,
    });
  }, [selectedTraveler]);
  //   useEffect(() => {
  //     console.log(tripData);
  //   }, [tripData]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 30, fontFamily: "bold", marginTop: 20 }}>
        Who's Traveling
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "bold", fontSize: 23 }}>
          Choose your travels
        </Text>
        <FlatList
          data={SelectTravelList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{ marginVertical: 10 }}
            >
              <OptionCard option={item} selectedOption={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Link href={"/create-trip/select-date"} style={{ width: "100%" }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "medium",
              fontSize: 20,
            }}
          >
            Continue
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default SelectTraveler;
