import { StyleSheet } from "react-native";
import { COLORS } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  emptyListPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontFamily: "bold",
    color: COLORS.white,
    fontSize: 18,
    marginTop: 10,
    marginHorizontal: 10,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  placeholderLogo: {
    borderRadius: 500,
    width: 85,
    height: 85,
  },
});

export default styles;
