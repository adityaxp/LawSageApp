import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../infrastructure/theme";

const styles = StyleSheet.create({
  buttonContainer: {
    width: SIZES.xxLarge + 20,
    height: SIZES.xxLarge + 20,
    borderRadius: SIZES.small,
    borderColor: COLORS.white,
    borderWidth: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  image: {
    width: SIZES.xxLarge,
    height: SIZES.xxLarge,
  },
});

export default styles;
