import { FlatList, Text, View } from "react-native";
import { useTodo } from "../../hooks/useTodo";
import TodoCard from "../TodoCard";
import styles from "./styles";

export default function TodoList() {
  const { todoList, countOfDoneStatus, countOfTodoStatus } = useTodo();

  return (
    <View style={styles.todoList}>
      <View style={styles.todoListContent}>
        <View style={styles.todoListHeader}>
          <View style={styles.todoListLabelCount}>
            <Text style={styles.todoListTodoLabel}>Criadas</Text>

            <Text style={styles.todoListCount}>{countOfTodoStatus}</Text>
          </View>

          <View style={styles.todoListLabelCount}>
            <Text style={styles.todoListDoneLabel}>Concluídas</Text>

            <Text style={styles.todoListCount}>{countOfDoneStatus}</Text>
          </View>
        </View>

        <FlatList
          data={todoList}
          keyExtractor={(item) => item.message}
          renderItem={({ item }) => (
            <TodoCard message={item.message} status={item.status} />
          )}
          style={styles.todoListItems}
        />
      </View>
    </View>
  );
}
