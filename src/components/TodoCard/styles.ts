import { StyleSheet } from "react-native";

export default StyleSheet.create({
  todoCard: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    height: 64,

    backgroundColor: "#262626",

    borderRadius: 8,
    borderColor: "#333333",
    borderWidth: 1,

    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 8,

    gap: 8,

    marginBottom: 8,
  },
  contentTodo: {
    width: 235,

    fontFamily: "Inter_400Regular",
    fontSize: 14,
    fontWeight: "400",
    color: "#F2F2F2",
  },
  contentDone: {
    width: 235,

    fontFamily: "Inter_400Regular",
    fontSize: 14,
    fontWeight: "400",
    color: "#808080",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  checkboxTodo: {
    alignItems: "center",
    justifyContent: "center",

    height: 18,
    width: 18,

    borderWidth: 1,
    borderColor: "#4EA8DE",
    borderRadius: 18 / 2,

    backgroundColor: "#262626",
  },
  checkboxDone: {
    alignItems: "center",
    justifyContent: "center",

    height: 18,
    width: 18,

    borderWidth: 1,
    borderColor: "#5E60CE",
    borderRadius: 18 / 2,

    backgroundColor: "#5E60CE",
  },
  deleteButton: {
    alignItems: "center",
    justifyContent: "center",

    height: 32,
    width: 32,
  },
});
