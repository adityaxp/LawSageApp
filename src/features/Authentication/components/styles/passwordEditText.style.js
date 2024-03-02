import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../infrastructure/theme";

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginHorizontal: SIZES.large,
    height: 50,
    borderRadius: SIZES.small,
    borderColor: COLORS.primary,
    borderWidth: 1.5,
  },
  icon: {
    paddingLeft: SIZES.xSmall,
  },
  textInput: {
    flex: 1,
    fontFamily: "regular",
    color: COLORS.black,
    paddingLeft: SIZES.medium,
    paddingTop: SIZES.xxSmall,
    fontSize: SIZES.large,
  },
  obsecureIcon: {
    paddingRight: SIZES.xSmall,
  },
});

export default styles;
