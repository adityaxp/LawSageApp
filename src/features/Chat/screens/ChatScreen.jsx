import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useRef, useState } from "react";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import { StatusBar } from "expo-status-bar";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { EmptyListPlaceHolder } from "../components/EmptyListPlaceHolder";
import { ChatRowItem } from "../components/ChatRowItem";
import { useRoute } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import {
  addItems,
  addSavedSessions,
  clearAllData,
  getData,
  storeData,
} from "../../../utils/localStore";
import CustomModal from "../../../components/CustomModal";
import { saveHTMLToPDF, storeDataInFile } from "../../../utils/externalStore";
import { convertChatDataToHTML } from "../../../utils/convertChatDataToHTML";

export const ChatScreen = ({ navigation }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = [SIZES.height - SIZES.height + 0.01, "45%", "50%"];
  const collectionName = "@temp-store";

  const scrollViewRef = useRef();
  const [chatInputText, setChatInputText] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [savedData, setSavedData] = useState("");
  const [fileType, setFileType] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [modalParams, setModalParams] = useState({
    modalDescription: "",
    modalPlaceholder: "",
    modalOperation: "",
  });

  const handleAlertClose = (inputValue) => {
    setIsModalVisible(false);
    if (inputValue) {
      if (fileType === ".json") {
        storeDataInFile(inputValue, fileType, savedData);
      } else if (fileType === ".pdf") {
        saveHTMLToPDF(inputValue, htmlText);
      } else if (fileType === ".local-save") {
        addSavedSessions("@saved-sessions", JSON.stringify(inputValue))
          .then(() => {
            addItems(inputValue, savedData)
              .then(() => {
                console.log("Data added to custom slot successfully!");
              })
              .catch((error) => {
                console.error("Error adding data:", error);
              });
          })
          .catch((error) => {
            console.error("Error adding data:", error);
          });
      }
    }
  };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const route = useRoute();
  const { model, hookParams } = route.params;
  const handleTextChange = (newChatText) => {
    setChatInputText(newChatText);
  };

  const handleAddChatData = () => {
    if (chatInputText) {
      setChatData((prevChatData) => [
        ...prevChatData,
        { prompt: chatInputText },
      ]);
      setChatInputText("");
      Keyboard.dismiss();
      scrollToBottom();
    }
  };

  const [chatData, setChatData] = useState([]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/images/chat-background.jpg")}
        style={styles.image}
      >
        <View style={styles.toolBarContainer}>
          <View style={styles.toolBarItems}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                clearAllData(collectionName);
                navigation.goBack();
              }}
            >
              <Ionicons
                name="arrow-back-circle-outline"
                size={34}
                color="black"
              />
            </TouchableOpacity>

            <View style={styles.modelTag}>
              <Text style={styles.modelTagText} numberOfLines={1}>
                {model}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.optionsButton}
              onPress={openBottomSheet}
            >
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
            {chatData.length <= 0 ? (
              <EmptyListPlaceHolder />
            ) : (
              <FlashList
                data={chatData}
                renderItem={({ item }) => (
                  <ChatRowItem prompt={item.prompt} hookParams={hookParams} />
                )}
                estimatedItemSize={273}
              />
            )}
          </ScrollView>
          <View style={styles.chatInputContainer}>
            <TextInput
              placeholder="Message LawSage..."
              style={styles.chatInput}
              selectionColor={COLORS.gray2}
              value={chatInputText}
              onChangeText={handleTextChange}
            />
            <TouchableOpacity onPress={handleAddChatData}>
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
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleIndicatorStyle={{
          width: 60,
          height: 5,
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <View style={styles.menuOptionsContainer}>
            <Text style={styles.optionsTitleText}>Save Chat</Text>
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                onPress={() => {
                  getData(collectionName)
                    .then((data) => {
                      setSavedData(data);
                      setModalParams({
                        modalDescription:
                          "Current session will be saved to local storage",
                        modalPlaceholder: "Enter a slot name",
                        modalOperation: "Save Session",
                      });
                      setIsModalVisible(true);
                      setFileType(".local-save");
                    })
                    .catch((error) => {
                      console.error("Error reading data:", error);
                    });
                }}
              >
                <View style={styles.menuItem(0.2)}>
                  <FontAwesome name="save" size={24} color="black" />
                  <Text style={styles.optionItemName}>
                    {"   "}Save to Local Storage
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0)}>
                  <AntDesign name="clouduploado" size={24} color="black" />
                  <Text style={styles.optionItemName}>
                    {"   "}Save to Cloud Storage{" "}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.menuOptionsContainer}>
            <Text style={styles.optionsTitleText}>Export Chat</Text>
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                onPress={() => {
                  getData(collectionName)
                    .then((data) => {
                      setSavedData(data);
                      setModalParams({
                        modalDescription: "Export as:",
                        modalPlaceholder: "Enter a filename",
                        modalOperation: "Save File",
                      });
                      setIsModalVisible(true);
                      setFileType(".json");
                    })
                    .catch((error) => {
                      console.error("Error reading data:", error);
                    });
                }}
              >
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="code-json"
                    size={24}
                    color="black"
                  />
                  <Text style={styles.optionItemName}>
                    {"   "}Export as JSON
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  getData(collectionName)
                    .then((data) => {
                      setModalParams({
                        modalDescription: "Export as:",
                        modalPlaceholder: "Enter a filename",
                        modalOperation: "Save File",
                      });
                      setHtmlText(convertChatDataToHTML(data));
                      setIsModalVisible(true);
                      setFileType(".pdf");
                    })
                    .catch((error) => {
                      console.error("Error reading data:", error);
                    });
                }}
              >
                <View style={styles.menuItem(0)}>
                  <AntDesign name="pdffile1" size={24} color="black" />
                  <Text style={styles.optionItemName}>
                    {"   "}Export as PDF
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <CustomModal
          isVisible={isModalVisible}
          onClose={handleAlertClose}
          modalParams={modalParams}
        />
      </BottomSheet>
    </GestureHandlerRootView>
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
    marginBottom: 5,
    flexWrap: "wrap",
    elevation: 5,
  },
  toolBarItems: {
    marginTop: SIZES.statusBarHeight + 5,
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
    fontSize: 14.5,
  },
  modelCardExpandButton: {
    paddingLeft: 10,
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
    elevation: 5,
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
    marginBottom: 8,
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
  menuOptionsContainer: {
    marginTop: 20,
  },
  optionsTitleText: {
    fontFamily: "semibold",
    fontSize: 18,
  },
  optionsContainer: {
    marginTop: 10,
    width: SIZES.width - 40,
    flexWrap: "wrap",
    borderColor: COLORS.gray,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  menuItem: (borderBottomWidth) => ({
    width: SIZES.width - 40,
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderColor: COLORS.gray,
  }),
  optionItemName: {
    fontFamily: "regular",
  },
});
