import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../../../infrastructure/theme";

const PromptItem = () => {
  return (
    <View style={styles.promptContainer}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>A</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.nameTag}>You</Text>
        <View style={styles.queryContainer}>
          <Text style={styles.text}>
            How does Indian law address the issue of forced labor and modern
            slavery?
          </Text>
        </View>
      </View>
    </View>
  );
};

const ResponseItem = () => {
  return (
    <View style={styles.promptContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../../../assets/images/law-sage-logo.png")}
          style={{
            width: 32,
            height: 32,
            borderRadius: 25,
            borderWidth: 0.2,
            borderColor: COLORS.gray2,
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.nameTag}>LawSage v0.2</Text>
        <View style={styles.queryContainer}>
          <Text style={styles.text}>
            Indian law addresses the issue of forced labor and modern slavery
            through the "Bonded Labor System (Abolition) Act, 1976" and the
            "Immoral Traffic (Prevention) Act, 1956". These laws prohibit
            various forms of forced labor, including bonded labor and
            trafficking for exploitation. They provide for the punishment of
            offenders and rehabilitation of victims. For more detailed
            information, refer to the respective acts or legal resources on
            Indian labor and trafficking laws.
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ChatRowItem = () => {
  return (
    <View style={styles.cardContainer}>
      <PromptItem />
      <View style={styles.line} />
      <ResponseItem />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexWrap: "wrap",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    borderColor: COLORS.gray2,
    borderWidth: 0.9,
    marginBottom: 10,
  },
  promptContainer: {
    padding: 10,
    flexDirection: "row",
  },
  avatarContainer: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 0.1,
    borderColor: COLORS.gray2,
    backgroundColor: "#0da33f",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  nameTag: {
    paddingLeft: 10,
    paddingTop: 2.5,
    fontFamily: "bold",
    fontSize: 16,
  },
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "auto",
    fontFamily: "regular",
  },
  line: {
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
});
