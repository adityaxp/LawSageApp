import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Background } from "../components/Background";
import { EmailEditText } from "../components/EmailEditText";
import { PasswordEditText } from "../components/PasswordEditText";
import styles from "./styles/loginscreen.style";
import { Button } from "../../../components/Button";

export const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Background />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.loginContainer}>
        <EmailEditText />
        <PasswordEditText />
        <Button title={"Log In"} isValid={true} loader={false} />
        <View style={styles.registerContainer}>
          <Text style={styles.memberText}>Not a member? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
