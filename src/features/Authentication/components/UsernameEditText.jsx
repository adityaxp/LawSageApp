import { View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./styles/emailEditText.style";

export const UsernameEditText = () => {
  return (
    <View style={styles.textInputContainer}>
      <Feather name="user" size={24} color="black" style={styles.icon} />
      <TextInput placeholder="Enter username" style={styles.textInput} />
    </View>
  );
};
