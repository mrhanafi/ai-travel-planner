import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import {collection,getDoc,getDocs,query, where} from 'firebase/firestore';
import {auth, db} from './../../config/FirebaseConfig'
import UserTripList from "../../components/MyTrips/UserTripList";

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [loading,setLoading] = useState(false); 

  useEffect(() => {
    user && getMyTrips()
  },[user]);

  const getMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    // console.log(user?.email);
    const q = query(collection(db,'UserTrips'),where('userEmail','==',user?.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) =>{
      console.log(doc.id, " => ",doc.data());
      setUserTrips(prev =>[...prev,doc.data()]);
    })
    setLoading(false);
  }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      {loading && <ActivityIndicator size={'large'} color={'black'} />}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "bold", fontSize: 35 }}>My Trip</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {userTrips?.length === 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips} />}
    </View>
  );
};

export default MyTrip;
