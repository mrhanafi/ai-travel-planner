import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../config/FirebaseConfig";

const SignIn = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onSignIn = () => {
    if (!email && !password) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-credential") {
          ToastAndroid.show("Invalid Credential", ToastAndroid.BOTTOM);
        }
      });
  };
  return (
    <View
      style={{
        padding: 25,
        height: "100%",
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "bold", fontSize: 30, marginTop: 40 }}>
        Let's sign you in
      </Text>
      <Text style={{ fontFamily: "regular", fontSize: 30, color: "gray" }}>
        Welcome Back
      </Text>
      <Text style={{ fontFamily: "regular", fontSize: 30, color: "gray" }}>
        You've been missed
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "regular" }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={(val) => setEmail(val)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "regular" }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <TouchableOpacity
        onPress={() => onSignIn()}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{
          padding: 15,
          backgroundColor: "white",
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: "black", textAlign: "center" }}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "gray",
  },
});
