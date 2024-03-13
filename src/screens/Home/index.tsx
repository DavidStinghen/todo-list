import { Image, SafeAreaView, View } from "react-native";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import styles from "./styles";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.headerView}>
        <Image
          source={require("../../../assets/logo.png")}
          height={32}
          width={110}
        />
      </View>

      <TodoForm />

      <TodoList />
    </SafeAreaView>
  );
}
