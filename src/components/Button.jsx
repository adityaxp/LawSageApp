import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS } from "../infrastructure/theme";

export const Button = ({ title, onPress, isValid, loader }) => {
  return (
    <TouchableOpacity
      style={styles.btnStyle(isValid === false ? COLORS.gray : COLORS.tertiary)}
      onPress={onPress}
    >
      {loader === false ? (
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
