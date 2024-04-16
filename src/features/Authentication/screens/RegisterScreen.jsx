import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EmailEditText } from "../components/EmailEditText";
import { PasswordEditText } from "../components/PasswordEditText";
import { LoginOrSignUpButton } from "../components/LoginOrSignUpButton";
import { UsernameEditText } from "../components/UsernameEditText";
import styles from "./styles/registercreen.style";

export const RegisterScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (text) => {
    setUserEmail(text);
  };

  const handlePasswordChange = (text) => {
    setUserPassword(text);
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Register</Text>
      </View>
      <View style={styles.registerContainer}>
        <UsernameEditText onUsernameChange={handleUsernameChange} />
        <EmailEditText onEmailChange={handleEmailChange} />
        <PasswordEditText onPasswordChange={handlePasswordChange} />
        <LoginOrSignUpButton
          title={"Register"}
          isValid={true}
          loader={false}
          userName={username}
          userEmail={userEmail}
          userPassword={userPassword}
          newUser={true}
        />
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
