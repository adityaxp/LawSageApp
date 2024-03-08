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
    fontFamily: "bold",
    color: COLORS.white,
    fontSize: 40,
    marginTop: SIZES.statusBarHeight,
    marginHorizontal: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  textCycler: {
    marginTop: SIZES.xxSmall,
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
    marginHorizontal: SIZES.large,
    marginVertical: SIZES.large,
  },
});

export default styles;
