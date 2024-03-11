import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../features/Home/screens/HomeScreen";
import { ProfileScreen } from "../../features/Profile/screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme/index";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLable: false,
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 1,
    height: 70,
  },
};

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? COLORS.tertiary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? COLORS.tertiary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
