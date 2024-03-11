import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { AntDesign } from "@expo/vector-icons";
import { Skeleton } from "../../../components/Skeleton";

export const HomeScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
        <View style={styles.newChatContainer}>
          <Text style={styles.text}>
            Experiencing legal issues? Start a new chat.
          </Text>
          <AntDesign
            name="arrowright"
            size={25}
            color="black"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.homeContainer}>
        <View style={styles.serviceStatusContainer}>
          <AntDesign name="checkcircle" size={30} color="green" />
          <Text style={styles.text}>
            Connection Successful! {"\n"}(using V100 instance @ 192.168.31.229)
          </Text>
        </View>
      </View>

      <View style={styles.serviceSelectionContainer}>
        <Text style={styles.modelHeadingText}>Model Selection</Text>

        <View style={styles.llmSelectionContainer}>
          <Text style={styles.modelTitleText}>LawSage LLM</Text>

          <TouchableOpacity
            style={
              selectedOption === "option1"
                ? styles.selectedOption
                : styles.option
            }
            onPress={() => handleOptionSelect("option1")}
          >
            <Text>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedOption === "option2"
                ? styles.selectedOption
                : styles.option
            }
            onPress={() => handleOptionSelect("option2")}
          >
            <Text>Option 2</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <Skeleton width={250} height={20} radius={0} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.statusBarHeight,
    marginHorizontal: 10,
  },
  newChatContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.large,
    borderColor: COLORS.gray,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  text: {
    marginLeft: 20,
    fontFamily: "medium",
    fontSize: 13,
  },
  icon: {
    marginRight: 20,
    paddingBottom: 3,
  },
  homeContainer: {
    marginTop: 35,
    marginHorizontal: 5,
  },
  serviceStatusContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  modelHeadingText: {
    fontFamily: "bold",
    fontSize: 34,
    padding: 5,
  },

  option: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "lightblue",
    marginBottom: 10,
  },
  modelTitleText: {
    fontFamily: "semibold",
    padding: 5,
    fontSize: 17,
  },
});
