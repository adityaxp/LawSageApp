import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Navigation } from "./src/infrastructure/navigation";
import { initializeApp } from "@firebase/app";
import firebaseConfigArgs from "./src/utils/Firebase";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const [authenticated, setAuthenticated] = useState(false);

  const app = initializeApp(firebaseConfigArgs);
  const auth = getAuth(app);

  useEffect(() => {
    const loadFontsAndHideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    loadFontsAndHideSplashScreen();
  }, [fontsLoaded]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user);
      console.log(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <>
      {fontsLoaded && <Navigation isAuthenticated={authenticated} />}
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
});
