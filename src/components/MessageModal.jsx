import { Modal, Portal, PaperProvider } from "react-native-paper";
import { Text } from "react-native";
import React, { useEffect, useState } from "react";

export const MessageModal = ({ visibility, message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(visibility);
  }, [visibility]);

  const hideModal = () => setVisible(false);
  const containerStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 20,
  };
  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>{message}</Text>
        </Modal>
      </Portal>
    </PaperProvider>
  );
};
