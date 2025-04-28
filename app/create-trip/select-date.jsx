import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";

const SelectDate = () => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };
  const OnDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show(
        "Please select Start and End date",
        ToastAndroid.BOTTOM
      );
    }
    const totalNumberOfDays = endDate.diff(startDate, "days");
    console.log(totalNumberOfDays + 1);
    setTripData({
      ...tripData,
      startDate: moment(startDate).format("DD MMM YYYY"),
      // startDate: startDate,
      endDate: moment(endDate).format("DD MMM YYYY"),
      // endDate: endDate,
      totalNumberOfDays: totalNumberOfDays + 1,
    });
    router.push("/create-trip/select-budget");
  };
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
        Travel Dates
      </Text>
      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={20}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{ color: "white" }}
        />
      </View>
      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 35,
        }}
      >
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
      </TouchableOpacity>
    </View>
  );
};

export default SelectDate;
