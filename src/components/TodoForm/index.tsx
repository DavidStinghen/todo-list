import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, TextInput, TouchableHighlight, View } from "react-native";
import { useTodo } from "../../hooks/useTodo";
import styles from "./styles";

export default function TodoForm() {
  const { addTodoItem } = useTodo();

  const [value, setValue] = useState("");

  const [focus, setFocus] = useState(false);

  function onSubmit() {
    addTodoItem(value);
    setValue("");
  }

  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={["#0D0D0D", "#0D0D0D", "#1a1a1a", "#1a1a1a"]}
      locations={[0, 0.5, 0.5, 1]}
    >
      <View style={styles.view}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={value}
          onChangeText={setValue}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={focus ? styles.textInputFocus : styles.textInput}
        />

        <TouchableHighlight
          underlayColor="#4EA8DE"
          onPress={onSubmit}
          style={styles.touchableOpacity}
        >
          <Image
            source={require("../../../assets/plus.png")}
            height={16}
            width={16}
          />
        </TouchableHighlight>
      </View>
    </LinearGradient>
  );
}
