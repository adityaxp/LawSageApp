import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./styles/emailEditText.style";

export const UsernameEditText = ({ onUsernameChange }) => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (text) => {
    onUsernameChange(text);
    setUsername(text);
  };

  return (
    <View style={styles.textInputContainer}>
      <Feather name="user" size={24} color="black" style={styles.icon} />
      <TextInput
        placeholder="Enter username"
        style={styles.textInput}
        value={username}
        onChangeText={handleUsernameChange}
      />
    </View>
  );
};
