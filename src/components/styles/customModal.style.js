import { StyleSheet } from "react-native";
import { COLORS } from "../../infrastructure/theme";

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    alignItems: "center",
    fontFamily: "semibold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 8,
    fontFamily: "regular",
  },
  saveContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: "regular",
    color: COLORS.white,
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default styles;
