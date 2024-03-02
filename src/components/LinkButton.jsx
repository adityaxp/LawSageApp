import { Image, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles/linkButton.style";

export const LinkButton = ({ image }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.buttonContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
