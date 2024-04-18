import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../infrastructure/theme";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { useAuth } from "../../../context/AuthContext";

export const LoginOrSignUpButton = ({
  title,
  isValid,
  loader,
  userName,
  userEmail,
  userPassword,
  newUser,
}) => {
  const [loaderState, setLoaderState] = useState(loader);

  const { auth } = useAuth();

  const handleOnPress = async () => {
    setLoaderState(true);
    try {
      if (newUser) {
        await createUserWithEmailAndPassword(auth, userEmail, userPassword);

        await updateProfile(auth.currentUser, { displayName: userName }).catch(
          (err) => Alert.alert("LawSage", err.message)
        );
      } else {
        await signInWithEmailAndPassword(auth, userEmail, userPassword);
      }
      console.log("Logged In");
      setLoaderState(false);
    } catch (error) {
      Alert.alert("LawSage", error.message);
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
