import React, { useContext, useState } from "react";
import {View,Text,TextInput,TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { NUZContext } from "@/context/NUZContext";


export default function Login() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {token, setToken} = useContext(NUZContext);

  const handleLogin = () => {
    if (!studentId || !password) {
    console.log("Error", "Please enter Student ID and Password");
      return;
    }

    
    if (studentId === "25MPA009" && password === "123456") {

       setToken("ProKTung")
       

    Alert.alert("Success", "Login successful");
    router.replace('/(tabs)')
      
    } else {
      Alert.alert("Login Failed", "Invalid Student ID or Password");
    }
  };

  return (
    <View style={styles.container}>

      {/* Logo / Icon */}
      <View style={styles.logo}>
        <Ionicons name="school" size={45} color="#fff" />
      </View>

      <Text style={styles.title}>Student Login</Text>
      <Text style={styles.subtitle}>
        Login to access your learning materials
      </Text>

      {/* Student ID */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={22}
          color="#777"
        />

        <TextInput
          style={styles.input}
          placeholder="Student ID"
          value={studentId}
          onChangeText={setStudentId}
          autoCapitalize="none"
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={22}
          color="#777"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#777"
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Demo Account */}
      <Text style={styles.demo}>
        Demo: ST001 / 123456
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    paddingHorizontal: 25,
    justifyContent: "center",
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#2563eb",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 30,
  },

  inputContainer: {
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },

  loginButton: {
    height: 55,
    backgroundColor: "#2563eb",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },

  demo: {
    textAlign: "center",
    color: "#999",
    fontSize: 13,
    marginTop: 20,
  },
});

