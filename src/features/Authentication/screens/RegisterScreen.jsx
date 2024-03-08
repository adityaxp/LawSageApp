import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { EmailEditText } from "../components/EmailEditText";
import { PasswordEditText } from "../components/PasswordEditText";
import { Button } from "../../../components/Button";
import { UsernameEditText } from "../components/UsernameEditText";
import styles from "./styles/registercreen.style";

export const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Register</Text>
      </View>
      <View style={styles.registerContainer}>
        <UsernameEditText />
        <EmailEditText />
        <PasswordEditText />
        <Button title={"Register"} isValid={true} loader={false} />
        <View style={styles.loginContainer}>
          <Text style={styles.memberText}>Already a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
