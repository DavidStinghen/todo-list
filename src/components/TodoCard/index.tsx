import { Image, Text, TouchableOpacity, View } from "react-native";
import { Status } from "../../enums";
import { useTodo } from "../../hooks/useTodo";
import { Todo } from "../../types";
import styles from "./styles";

export default function TodoCard({ message, status }: Todo) {
  const { updateTodoItem, deleteTodoItem } = useTodo();

  const contentStyle = {
    todo: styles.contentTodo,
    done: styles.contentDone,
  };

  const checkboxStyle = {
    todo: styles.checkboxTodo,
    done: styles.checkboxDone,
  };

  const updateStatus = {
    todo: Status.DONE,
    done: Status.TODO,
  };

  return (
    <View style={styles.todoCard}>
      <TouchableOpacity
        style={checkboxStyle[status]}
        onPress={() => updateTodoItem(message, updateStatus[status])}
      >
        {status === Status.DONE && (
          <Image
            source={require("../../../assets/done.png")}
            height={4.69}
            width={7.31}
            tintColor="#F2F2F2"
          />
        )}
      </TouchableOpacity>

      <Text numberOfLines={2} style={contentStyle[status]}>
        {message}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTodoItem(message)}
      >
        <Image
          source={require("../../../assets/trash.png")}
          height={14}
          width={12.48}
          tintColor="#808080"
        />
      </TouchableOpacity>
    </View>
  );
}
