import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { ChatScreen } from "../../features/Chat/screens/ChatScreen";
import { LoginScreen } from "../../features/Authentication/screens/LoginScreen";
import SavedSession from "../../features/MenuOptions/screens/SavedSession";
const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
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
        name="SavedSession"
        component={SavedSession}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
