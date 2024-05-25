import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { Skeleton } from "../../../components/Skeleton";
import { TypeWriter } from "../../../components/TypeWriter";
import { AntDesign, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Clipboard from "expo-clipboard";
import RAGResponseSevice from "../../../services/RAGResponseSevice";
import LLMResponseService from "../../../services/LLMResponseService";

const PromptItem = ({ prompt }) => {
  return (
    <View style={styles.promptContainer}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>A</Text>
      </View>
      <View>
        <Text style={styles.nameTag}>You</Text>
        <View style={styles.queryContainer}>
          <Text style={styles.text}>{prompt}</Text>
        </View>
      </View>
    </View>
  );
};

const ResponseItem = ({ loader, answer }) => {
  const copyToClipboard = async (response) => {
    await Clipboard.setStringAsync(response);
    //Toast.show("Text copied to clipboard!");
  };

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
      <View style={{ minHeight: loader ? 0 : 0 }}>
        <Text style={styles.nameTag}>LawSage</Text>
        <View style={styles.queryContainer}>
          {loader ? (
            <View>
              {[...Array(3)].map((_, index) => (
                <Skeleton
                  key={index}
                  width={SIZES.width - 90}
                  height={20}
                  radius={6}
                  margin={10}
                  marginBottom={10}
                />
              ))}
            </View>
          ) : (
            <TypeWriter text={answer} speed={10} />
          )}
          <View style={styles.interactionsContainer}>
            <TouchableOpacity>
              <AntDesign name="like2" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="dislike2" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                copyToClipboard(answer);
              }}
            >
              <Feather name="clipboard" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="infocirlceo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export const ChatRowItem = ({ prompt, hookParams }) => {
  const { responseData, loading, error } =
    hookParams == "LawSage"
      ? LLMResponseService({ prompt })
      : RAGResponseSevice({ prompt, hookParams });

  return (
    <View style={styles.cardContainer}>
      <PromptItem prompt={prompt} />
      <View style={styles.line} />
      {loading ? (
        <ResponseItem loader={loading} answer={""} />
      ) : error ? (
        <ResponseItem loader={loading} answer={error} />
      ) : responseData ? (
        <ResponseItem loader={loading} answer={responseData.response.content} />
      ) : (
        <ResponseItem loader={loading} answer={""} />
      )}
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
    elevation: 5,
  },
  promptContainer: {
    padding: 10,
    flexDirection: "row",
  },

  avatarContainer: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 0.05,
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
    marginLeft: 10,
    marginTop: 2.5,
    marginBottom: 10,
    fontFamily: "bold",
    fontSize: 16,
  },
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "justify",
    fontFamily: "regular",
    fontSize: Platform.OS === "ios" ? 16.5 : 12,
  },
  line: {
    borderColor: COLORS.gray2,
    borderBottomWidth: 0.5,
  },
  queryContainer: {
    marginRight: 45,
  },
  interactionsContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
