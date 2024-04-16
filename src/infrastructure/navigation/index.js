import React, { useContext } from "react";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
export const Navigation = ({ isAuthenticated }) => {
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
