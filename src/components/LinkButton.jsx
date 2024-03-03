import { Image, View, TouchableOpacity, Linking } from "react-native";
import React from "react";
import styles from "./styles/linkButton.style";

export const LinkButton = ({ image, link }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(link).catch((err) =>
          console.error("An error occurred", err)
        )
      }
    >
      <View style={styles.buttonContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
