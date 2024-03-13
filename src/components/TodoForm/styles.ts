import { StyleSheet } from "react-native";

export default StyleSheet.create({
  linearGradient: {
    alignItems: "center",

    width: "100%",
    height: 54,
  },
  view: {
    flexDirection: "row",

    alignContent: "center",
    justifyContent: "flex-start",

    width: "100%",
    maxWidth: 327,

    height: 54,

    gap: 8,
  },
  textInput: {
    flex: 1,

    height: 54,
    padding: 16,

    borderRadius: 6,

    backgroundColor: "#262626",
    color: "#F2F2F2",

    borderColor: "#0D0D0D",
    borderWidth: 1,

    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "400",
  },
  textInputFocus: {
    flex: 1,

    height: 54,
    padding: 16,

    borderRadius: 6,

    backgroundColor: "#333333",
    color: "#F2F2F2",

    borderColor: "#5E60CE",
    borderWidth: 1,

    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "400",
  },
  touchableOpacity: {
    alignItems: "center",
    justifyContent: "center",

    height: 52,
    width: 52,

    borderRadius: 6,

    backgroundColor: "#1E6F9F",
  },
});
