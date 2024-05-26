import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../infrastructure/theme";
import {
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useAuth } from "../../../context/AuthContext";
import { signOut } from "@firebase/auth";

const ProfileMenu = ({ navigation }) => {
  const { auth } = useAuth();

  return (
    <View style={styles.menuWrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SavedSession");
        }}
      >
        <View style={styles.menuItem(0.2)}>
          <FontAwesome name="save" size={24} color="black" />
          <Text style={styles.name}>{"   "}Saved Chats</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.menuItem(0.2)}>
          <SimpleLineIcons name="settings" size={24} color="black" />
          <Text style={styles.name}>{"   "}Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.menuItem(0.2)}>
          <MaterialIcons name="cached" size={24} color="black" />
          <Text style={styles.name}>{"   "}Clear Cache</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.menuItem(0.2)}>
          <AntDesign name="infocirlceo" size={24} color="black" />
          <Text style={styles.name}>{"   "}About</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          await signOut(auth);
          navigation.navigate("LoginScreen");
        }}
      >
        <View style={styles.menuItem(0.2)}>
          <AntDesign name="logout" color={COLORS.black} size={24} />
          <Text style={styles.name}>{"   "}Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Image
          source={require("../../../../assets/images/auth-background.jpg")}
          style={styles.cover}
        />
      </View>
      <View>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Text style={styles.avatarText}>A</Text>
          </View>
        </View>
      </View>
      <ProfileMenu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  cover: {
    height: 290,
    width: "100%",
    resizeMode: "cover",
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 50,
  },
  profile: {
    height: 125,
    width: 125,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.black,
    backgroundColor: "#0da33f",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -75,
  },
  avatarText: {
    fontSize: 60,
    fontFamily: "regular",
    color: "#FFFFFF",
  },
  name: {
    fontFamily: "regular",
    fontSize: SIZES.medium,
  },

  menuWrapper: {
    marginTop: SIZES.large,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },

  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: COLORS.gray,
  }),
});
