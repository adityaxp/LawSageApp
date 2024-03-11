import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { StatusBar } from "expo-status-bar";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { EmptyListPlaceHolder } from "../components/EmptyListPlaceHolder";
import { ChatRowItem } from "../components/ChatRowItem";

export const ChatScreen = ({ navigation }) => {
  const scrollViewRef = useRef();
  const [chatState, setChatState] = useState(true);

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <ImageBackground
      source={require("../../../../assets/images/chat-background.jpg")}
      style={styles.image}
    >
      <View style={styles.toolBarContainer}>
        <View style={styles.toolBarItems}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="arrow-back-circle-outline"
              size={34}
              color="black"
            />
          </TouchableOpacity>

          <View style={styles.modelTag}>
            <Text style={styles.modelTagText} numberOfLines={1}>
              Model Name{" "}
            </Text>
            <AntDesign name="down" size={14} color="gray" />
          </View>

          <TouchableOpacity style={styles.optionsButton}>
            <Ionicons
              name="ellipsis-horizontal-circle"
              size={34}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{ flexGrow: 1, padding: 8 }}
        >
          {chatState ? <EmptyListPlaceHolder /> : <ChatRowItem />}
        </ScrollView>
        <View style={styles.chatInputContainer}>
          <TextInput
            placeholder="Message LawSage..."
            style={styles.chatInput}
            selectionColor={COLORS.gray2}
            onFocus={scrollToBottom}
          />
          <TouchableOpacity>
            <View style={styles.chatButton}>
              <AntDesign name="arrowup" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>
            LawSage can make mistakes. It's recommended to confirm important
            details.
          </Text>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="dark" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  toolBarContainer: {
    backgroundColor: COLORS.lightWhite,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexWrap: "wrap",
  },
  toolBarItems: {
    marginTop: SIZES.statusBarHeight,
    flexDirection: "row",
    marginBottom: 10,
  },
  backButton: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  modelTag: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  optionsButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
  },
  modelTagText: {
    fontFamily: "medium",
    fontStyle: "italic",
    color: COLORS.gray,
  },

  chatInputContainer: {
    height: 50,
    borderRadius: SIZES.small,
    borderColor: COLORS.gray,
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  chatInput: {
    flex: 1,
    marginLeft: 5,
    fontFamily: "regular",
  },
  infoTextContainer: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
  },
  infoText: {
    fontSize: 12.5,
    color: COLORS.white,
    fontFamily: "regular",
    textAlign: "center",
  },
  chatButton: {
    backgroundColor: COLORS.tertiary,
    padding: 8,
    borderRadius: SIZES.small,
  },
});
