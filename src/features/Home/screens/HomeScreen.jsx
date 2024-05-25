import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { AntDesign } from "@expo/vector-icons";
import { Skeleton } from "../../../components/Skeleton";
import checkupLLMService from "../../../services/checkupLLMService";
import { hostAddress } from "../../../env/Hosts";
import { useAuth } from "../../../context/AuthContext";

export const HomeScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hookParams, setHookParams] = useState(null);
  const { connectionData, loading, error, refetch } = checkupLLMService();
  const { user } = useAuth();

  if (!!user) {
    // console.log(user.displayName, user.uid);
  } else {
    console.log("No username");
  }

  const handleOptionSelect = (option, modelTag) => {
    setSelectedOption(modelTag);
    setHookParams(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          connectionData
            ? selectedOption
              ? navigation.navigate("ChatScreen", {
                  model: selectedOption,
                  hookParams: hookParams,
                })
              : Alert.alert("LawSage", "No model selected!")
            : Alert.alert(
                "LawSage",
                "Can't reach LLM service please connect to an instance."
              )
        }
      >
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
        {!loading ? (
          error ? (
            <View>
              <View style={styles.serviceStatusContainer}>
                <AntDesign name="closecircle" size={30} color="red" />
                <Text style={styles.text}>
                  Connection Failed! {"\nError: " + error}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.retryButton}
                onPress={() => {
                  refetch();
                }}
              >
                <Text style={styles.retryText}>Retry</Text>
              </TouchableOpacity>
            </View>
          ) : connectionData ? (
            <View style={styles.serviceStatusContainer}>
              <AntDesign name="checkcircle" size={30} color="green" />
              <Text style={styles.text}>
                Connection Successful! {"\n"}(using {connectionData.deviceName}{" "}
                instance @ {hostAddress})
              </Text>
            </View>
          ) : (
            <View style={styles.serviceStatusContainer}>
              <AntDesign name="closecircle" size={30} color="red" />
              <Text style={styles.text}>
                LLM service down! {"\n"}
                instance @ {hostAddress}
              </Text>
            </View>
          )
        ) : (
          <View style={styles.serviceStatusContainer}>
            <Skeleton width={25} height={25} radius={30} />
            <Skeleton
              width={SIZES.width - 100}
              height={20}
              radius={1}
              marginLeft={20}
            />
          </View>
        )}
      </View>

      <View style={styles.serviceSelectionContainer}>
        <Text style={styles.modelHeadingText}>Model Selection</Text>

        <View style={styles.llmSelectionContainer}>
          <Text style={styles.modelTitleText}>LawSage LLM</Text>
          <ScrollView style={{ padding: 5 }}>
            <TouchableOpacity
              style={
                selectedOption === "law-sage-v0.3-GGUF"
                  ? styles.selectedOption
                  : styles.option
              }
              onPress={() =>
                handleOptionSelect("LawSage", "law-sage-v0.3-GGUF")
              }
            >
              <Text style={styles.optionText}>law-sage-v0.3-GGUF</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedOption === "law-sage-v0.3"
                  ? styles.selectedOption
                  : styles.option
              }
              onPress={() => handleOptionSelect("LawSage", "law-sage-v0.3")}
            >
              <Text style={styles.optionText}>law-sage-v0.3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedOption === "law-sage-v0.2"
                  ? styles.selectedOption
                  : styles.option
              }
              onPress={() => handleOptionSelect("LawSage", "law-sage-v0.2")}
            >
              <Text style={styles.optionText}>law-sage-v0.2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedOption === "law-sage-v0.2-GGUF"
                  ? styles.selectedOption
                  : styles.option
              }
              onPress={() =>
                handleOptionSelect("LawSage", "law-sage-v0.2-GGUF")
              }
            >
              <Text style={styles.optionText}>law-sage-v0.2-GGUF</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedOption === "law-sage-v0.1"
                  ? styles.selectedOption
                  : styles.option
              }
              onPress={() => handleOptionSelect("LawSage", "law-sage-v0.1")}
            >
              <Text style={styles.optionText}>law-sage-v0.1</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.RAGSelectionContainer}>
          <Text style={styles.modelTitleText}>LawSage RAG</Text>
          <ScrollView style={{ padding: 5 }}>
            <TouchableOpacity
              style={
                selectedOption === "RAG - Central Acts Legislation"
                  ? styles.selectedOption
                  : styles.option
              }
              onPress={() =>
                handleOptionSelect(
                  "RAG_central_acts",
                  "RAG - Central Acts Legislation"
                )
              }
            >
              <Text style={styles.optionText}>
                RAG - Central Acts Legislation
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedOption === "RAG - State Acts Legislation"
                  ? styles.selectedOption
                  : styles.option
              }
              onPress={() =>
                handleOptionSelect(
                  "RAG_state_acts",
                  "RAG - State Acts Legislation"
                )
              }
            >
              <Text style={styles.optionText}>
                RAG - State Acts Legislation
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedOption === "RAG - Constitution"
                  ? styles.selectedOption
                  : styles.option
              }
              onPress={() =>
                handleOptionSelect("RAG_constitution", "RAG - Constitution")
              }
            >
              <Text style={styles.optionText}>RAG - Constitution</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
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
    marginBottom: 10,
  },
  modelHeadingText: {
    fontFamily: "bold",
    marginTop: 10,
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
  llmSelectionContainer: {
    height: 210,
    marginBottom: 10,
  },
  RAGSelectionContainer: {
    height: 210,
    marginBottom: 20,
  },
  optionText: {
    fontFamily: "regular",
  },
  retryButton: {
    height: 50,
    width: "100%",
    marginTop: 10,
    backgroundColor: COLORS.tertiary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  retryText: {
    fontFamily: "medium",
    color: COLORS.white,
    fontSize: 18,
  },
});
