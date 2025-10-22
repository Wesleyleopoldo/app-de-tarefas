import { Text, TextInput, View } from "react-native";
import { s } from "./style";
import { TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={s.container}>
      <Text style={s.text}>Tarefas</Text>
      <View style={s.textInputContainer}>
        <TextInput
          style={s.textInput}
          placeholder="Pesquise aqui a tarefa..."
        />

        Touchable
      </View>
    </View>
  );
}
