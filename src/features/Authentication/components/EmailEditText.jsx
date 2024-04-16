import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles/emailEditText.style";

export const EmailEditText = ({ onEmailChange }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (text) => {
    onEmailChange(text);
    setEmail(text);
  };

  return (
    <View style={styles.textInputContainer}>
      <Entypo name="email" size={24} color="black" style={styles.icon} />
      <TextInput
        placeholder="Enter email"
        style={styles.textInput}
        value={email}
        onChangeText={handleEmailChange}
      />
    </View>
  );
};
