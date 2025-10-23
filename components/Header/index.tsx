import { FontAwesome } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./style";

export default function Header() {
  return (
    <View style={s.container}>
      <Text style={s.text}>Tarefas</Text>
      <View style={s.textInputContainer}>
        <TextInput
          style={s.textInput}
          placeholder="Pesquise aqui a tarefa..."
        />

        <TouchableOpacity>
          <FontAwesome
            name="plus"
            style={s.buttonAdd}
          />
          
        </TouchableOpacity>
      </View>
    </View>
  );
}
