import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import styles from "./styles/passwordEditText.style";

export const PasswordEditText = () => {
  const [obsecureText, setObsecureText] = useState(true);
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
