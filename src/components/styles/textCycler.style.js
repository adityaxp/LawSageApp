import { StyleSheet } from "react-native";
import { COLORS } from "../../infrastructure/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  tagline: {
    fontFamily: "bold",
    color: COLORS.white,
    fontSize: 25,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default styles;
