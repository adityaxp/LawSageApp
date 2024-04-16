import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../infrastructure/theme";
import { initializeApp } from "@firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "@firebase/auth";
import firebaseConfigArgs from "../../../utils/Firebase";

export const LoginOrSignUpButton = ({
  title,
  onPress,
  isValid,
  loader,
  userName,
  userEmail,
  userPassword,
  newUser,
}) => {
  newUser
    ? console.log(userName, userEmail, userPassword)
    : console.log(userEmail, userPassword);

  const [loaderState, setLoaderState] = useState(loader);

  const app = initializeApp(firebaseConfigArgs);
  const auth = getAuth(app);

  const handleOnPress = async () => {
    setLoaderState(true);
    try {
      if (newUser) {
        await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      } else {
        await signInWithEmailAndPassword(auth, userEmail, userPassword);
      }
      console.log("Logged In");
      setLoaderState(false);
    } catch (error) {
      console.log("Authentication Error:", error);
      setLoaderState(false);
    }
  };

  return (
    <TouchableOpacity
      style={styles.btnStyle(isValid === false ? COLORS.gray : COLORS.tertiary)}
      onPress={handleOnPress}
    >
      {loaderState === false ? (
        <Text style={styles.btnText}>{title}</Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "bold",
    color: COLORS.white,
    fontSize: 18,
  },
  btnStyle: (backgroundColor) => ({
    height: 50,
    width: "100%",
    marginTop: 10,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  }),
});
