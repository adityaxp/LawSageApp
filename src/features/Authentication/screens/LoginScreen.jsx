import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Background } from "../components/Background";
import { EmailEditText } from "../components/EmailEditText";
import { PasswordEditText } from "../components/PasswordEditText";
import styles from "./styles/loginscreen.style";
import { LoginOrSignUpButton } from "../components/LoginOrSignUpButton";

export const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleEmailChange = (text) => {
    setUserEmail(text);
  };

  const handlePasswordChange = (text) => {
    setUserPassword(text);
  };

  return (
    <ScrollView style={styles.container}>
      <Background />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.loginContainer}>
        <EmailEditText onEmailChange={handleEmailChange} />
        <PasswordEditText onPasswordChange={handlePasswordChange} />
        <LoginOrSignUpButton
          title={"Log In"}
          isValid={true}
          loader={false}
          userEmail={userEmail}
          userPassword={userPassword}
          newUser={false}
        />
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
