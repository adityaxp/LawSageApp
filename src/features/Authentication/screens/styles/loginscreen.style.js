import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  loginContainer: {
    marginHorizontal: SIZES.large,
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
    marginTop: SIZES.small - 5,
    marginLeft: 5,
    flexDirection: "row",
  },
  memberText: {
    fontFamily: "medium",
  },
  registerText: {
    fontFamily: "medium",
    color: COLORS.link,
  },
});

export default styles;
