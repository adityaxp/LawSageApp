import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import styles from "./styles/passwordEditText.style";

export const PasswordEditText = ({ onPasswordChange }) => {
  const [obsecureText, setObsecureText] = useState(true);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
    onPasswordChange(text);
  };

  return (
    <View style={styles.textInputContainer}>
      <MaterialCommunityIcons
        name="lock-outline"
        size={24}
        color="black"
        style={styles.icon}
      />
      <TextInput
        placeholder="Enter password"
        secureTextEntry={obsecureText}
        style={styles.textInput}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity onPress={() => setObsecureText(!obsecureText)}>
        <Feather
          name={obsecureText ? "eye" : "eye-off"}
          size={24}
          color="black"
          style={styles.obsecureIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
