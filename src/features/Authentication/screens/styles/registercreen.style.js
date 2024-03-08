import { StyleSheet, StatusBar } from "react-native";
import { COLORS, SIZES } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "bold",
    fontSize: 24,
    marginBottom: SIZES.large,
    color: COLORS.tertiary,
  },
  registerContainer: {
    marginHorizontal: SIZES.large,
  },
  loginContainer: {
    marginTop: SIZES.small - 5,
    marginLeft: 5,
    flexDirection: "row",
  },
  memberText: {
    fontFamily: "medium",
    fontSize: 15,
  },
  loginText: {
    fontFamily: "medium",
    color: COLORS.link,
    fontSize: 15,
  },
});

export default styles;
