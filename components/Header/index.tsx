import { FontAwesome } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState, useRef } from "react";
import { s } from "./style";

type HeaderProps = {
  addItem: (novaTask: string) => void;
}

export default function Header({ addItem }: HeaderProps) {
  const [ item, setItem ] = useState("");

  function removeValueInput(item: string) {
    addItem(item);
    setItem("");
  }

  return (
    <View style={s.container}>
      <Text style={s.text}>Tarefas</Text>
      <View style={s.textInputContainer}>
        <TextInput
          style={s.textInput}
          placeholder="Pesquise aqui a tarefa..."
          value={item}
          onChangeText={novoItem => setItem(novoItem)}
        />

        <TouchableOpacity onPress={() => removeValueInput(item)}>
          <FontAwesome
            name="plus"
            style={s.buttonAdd}
          />
          
        </TouchableOpacity>
      </View>
    </View>
  );
}
