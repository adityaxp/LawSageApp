import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { ChatScreen } from "../../features/Chat/screens/ChatScreen";
import { LoginScreen } from "../../features/Authentication/screens/LoginScreen";
import { RegisterScreen } from "../../features/Authentication/screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
