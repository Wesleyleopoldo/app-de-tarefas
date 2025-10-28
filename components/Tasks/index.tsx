import { tasks } from "@/data/tasks";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./style";

export type TaskProps = {
    id: number;
    title: string;
    onDelete: () => void;
}

export default function Task({ id, title, onDelete }: TaskProps) {

    const [task, setTask] = useState(tasks);

    return (
        <View style={s.container}>
            <TouchableOpacity onPress={onDelete}>
                <FontAwesome
                    name="trash"
                    size={20}
                />
            </TouchableOpacity>
            <Text>{title}</Text>
        </View>
    )
}