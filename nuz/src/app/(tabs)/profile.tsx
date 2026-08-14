import React, { useContext, useState } from "react";
import {View,Text,TouchableOpacity,StyleSheet,Alert, ScrollView} from "react-native";
import { globalStyles } from "../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { NUZContext } from "@/context/NUZContext";

export default function Profile() {
  
 const {token, setToken, studentInfo} = useContext(NUZContext);


  const handleLogout = () => {
    setToken('');
    router.replace('/login')
  };

  return (
    <ScrollView style={globalStyles.container}>
      {/* Profile Header */}
      <View style={globalStyles.profileHeader}>
        <View style={globalStyles.avatar}>
          <Ionicons name="person" size={45} color="#fff" />
        </View>

        <Text style={globalStyles.name}>{studentInfo.name}</Text>
        <Text style={globalStyles.studentId}>{studentInfo.studentID}</Text>
      </View>

      {/* Student Information */}
      <View style={globalStyles.card}>
        <View style={globalStyles.infoRow}>
          <Ionicons name="school-outline" size={22} color="#555" />
          <View>
            <Text style={globalStyles.label}>Course</Text>
            <Text style={globalStyles.value}>MPA</Text>
          </View>
        </View>

         <View style={globalStyles.infoRow}>
          <Ionicons name="layers-outline" size={22} color="#555" />
          <View>
            <Text style={globalStyles.label}>Batch</Text>
            <Text style={globalStyles.value}>3</Text>
          </View>
        </View>

       </View>

      {/* Login / Logout */}
   
      {token !== '' ? (
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.logoutButton]}
          onPress={handleLogout}
   
        >
          <Ionicons name="log-out-outline" size={22} color="#fff" />
          <Text style={globalStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      ) : <View> </View> }
    
    </ScrollView>
  );
}



