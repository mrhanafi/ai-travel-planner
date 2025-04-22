import { View, Text, TextInput, StyleSheet, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../config/FirebaseConfig";

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const OnCreateAccount = () => {
    if (!email && !password && !fullname) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        router.replace("/mytrip");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "bold", fontSize: 30, marginTop: 40 }}>
        Create New Account
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "regular" }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          onChangeText={(val) => setFullname(val)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
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
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
        onPress={() => OnCreateAccount()}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
        style={{
          padding: 15,
          backgroundColor: "white",
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: "black", textAlign: "center" }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "gray",
  },
});
