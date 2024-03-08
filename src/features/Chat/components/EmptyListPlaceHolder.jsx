import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles/emptyListPlaceHolder.style";

export const EmptyListPlaceHolder = () => {
  return (
    <View style={styles.emptyListPlaceholder}>
      <Image
        source={require("../../../../assets/images/law-sage-logo.png")}
        style={styles.placeholderLogo}
      />
      <Text style={styles.placeholderText}>
        How may I assist you today with your legal troubles?
      </Text>
    </View>
  );
};
