import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/localStore";

const SavedSession = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    getData("@saved-sessions")
      .then((data) => {
        setJsonData(data);
        console.log(jsonData);
      })
      .catch((error) => {
        console.error("Error reading data:", error);
      });
  }, []);

  return (
    <View>
      <Text>Saved session disabled.</Text>
    </View>
  );
};

export default SavedSession;

const styles = StyleSheet.create({});
