import { StyleSheet } from "react-native";

export default StyleSheet.create({
  todoList: {
    flex: 1,

    alignItems: "center",

    width: "100%",

    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 32,

    backgroundColor: "#1a1a1a",
  },
  todoListContent: {
    flex: 1,

    width: "100%",
    maxWidth: 327,
  },
  todoListHeader: {
    flexDirection: "row",

    alignItems: "flex-start",
    justifyContent: "space-between",

    height: 39,
    width: "100%",
  },
  todoListLabelCount: {
    flexDirection: "row",

    justifyContent: "flex-start",
    alignItems: "center",

    gap: 8,
  },
  todoListTodoLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    fontWeight: "bold",
    color: "#4EA8DE",
  },
  todoListDoneLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    fontWeight: "bold",
    color: "#8284FA",
  },
  todoListCount: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    fontWeight: "bold",
    color: "#D9D9D9",

    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  todoListItems: {
    flex: 1,

    width: "100%",
  },
});
