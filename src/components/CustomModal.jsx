import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../infrastructure/theme";
import styles from "./styles/customModal.style";

const CustomModal = ({ isVisible, onClose, modalParams }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContent}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>LawSage</Text>
          <TouchableOpacity
            onPress={() => {
              onClose(null);
              setInputValue("");
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily: "regular" }}>
          {modalParams.modalDescription}
        </Text>
        <TextInput
          style={styles.input}
          placeholder={modalParams.modalPlaceholder}
          value={inputValue}
          selectionColor={COLORS.gray2}
          onChangeText={setInputValue}
        />
        <View style={styles.saveContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              onClose(inputValue);
              setInputValue("");
            }}
          >
            <Text style={styles.buttonText}>{modalParams.modalOperation}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
