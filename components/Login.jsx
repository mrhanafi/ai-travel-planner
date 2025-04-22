import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/login.jpg")}
        style={{ width: "100%", height: 500 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            fontSize: 17,
            textAlign: "center",
            color: "gray",
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly. Travel smarter with
          AI-driven insights
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "regular",
              fontSize: 17,
            }}
          >
            Sign in with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "25%",
  },
});
