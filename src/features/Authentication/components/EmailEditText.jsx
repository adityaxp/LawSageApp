import { View, TextInput } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles/emailEditText.style";

export const EmailEditText = () => {
  return (
    <View style={styles.textInputContainer}>
      <Entypo name="email" size={24} color="black" style={styles.icon} />
      <TextInput placeholder="Enter email" style={styles.textInput} />
    </View>
  );
};
