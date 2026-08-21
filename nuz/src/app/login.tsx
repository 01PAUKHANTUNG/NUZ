import React, { useContext, useEffect, useState } from "react";
import {View,Text,TextInput,TouchableOpacity, StyleSheet, Alert, ToastAndroid, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { NUZContext } from "@/context/NUZContext";
import { globalStyles } from "@/styles/global";
import Toast from "react-native-toast-message";
import { allUsers } from "@/assets/products";



export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {token, setToken, studentInfo, setStudentInfo} = useContext(NUZContext);
  const [loginStudent, setLoginStudent] = useState('');

  const filteringLoginStudent = allUsers.find((item)=> 
    item.name === name &&
    item.emial === email &&
    item.studentID === studentId &&
    item.password === password
  );
 

  const handleLogin = () => {
    if (!studentId || !password || !email || !studentId) {
    
    Toast.show({
    type: "info",
    text1: "Kisam lai",
    text2: "Enter your infomation!",
     });
      return;
    }

    if(filteringLoginStudent){
    
    if (name === filteringLoginStudent.name && 
        studentId === filteringLoginStudent.studentID && 
        password === filteringLoginStudent.password && 
         email === filteringLoginStudent.emial) {

       setToken("ProKTung")
       
       setStudentInfo({
        name : name,
        email : email,
        studentID : studentId,
        password : password
       })
      


    Alert.alert("Success", "Login successful");
    router.replace('/(tabs)')
      
    } else {
      Alert.alert("Login Failed", "Invalid Student ID or Password");
    }
  }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
    <ScrollView
    contentContainerStyle={styles.scrollContainer}
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.container}>

      {/* Logo / Icon */}
      <View style={styles.logo}>
        <Ionicons name="school" size={45} color="#fff" />
      </View>

      <Text style={styles.title}>Student Login</Text>
      <Text style={styles.subtitle}>
        Login to access your learning materials
      </Text>

        {/* Student Name */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="person"
          size={22}
          color="#777"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
        />
      </View>

       {/* Email*/}
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail"
          size={22}
          color="#777"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

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

    </View>
     </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
  flexGrow: 1,
  justifyContent: "center",
  paddingVertical: 10,
},
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
    
    borderColor : "#ddd",
    padding: 10,
    borderRadius: 6,
    
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
});

