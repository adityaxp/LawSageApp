import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
  },
  image: {
    resizeMode: "cover",
    width: SIZES.width,
    height: SIZES.height * 0.45,
  },
  text: {
    position: "absolute",
    top: SIZES.height * 0.1,
    fontFamily: "bold",
    color: COLORS.white,
    left: 20,
    fontSize: 40,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  textCycler: {
    position: "absolute",
    top: SIZES.height * 0.18,
  },
  curve: {
    position: "absolute",
    top: SIZES.height * 0.42,
    width: SIZES.width,
    height: 50,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  socialButtonContainer: {
    position: "absolute",
    top: SIZES.height * 0.3,
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default styles;
