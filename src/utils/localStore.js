import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (collectionName, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(collectionName, jsonValue);
  } catch (e) {
    console.error("Error saving data", e);
  }
};

export const getData = async (collectionName) => {
  try {
    const jsonValue = await AsyncStorage.getItem(collectionName);
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {
    console.error("Error reading data", e);
    return {};
  }
};
export const clearAllData = async (collectionName) => {
  try {
    await AsyncStorage.removeItem(collectionName);
  } catch (e) {
    console.error("Error clearing data", e);
  }
};

export const addItems = async (collectionName, newItem) => {
  try {
    const existingData = await getData(collectionName);

    const updatedData = {
      ...existingData,
      ...newItem,
    };
    await storeData(collectionName, updatedData);
  } catch (e) {
    console.error("Error adding item", e);
  }
};
