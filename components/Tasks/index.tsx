import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { s } from "./style";

export type TaskProps = {
    id: number;
    title: string;
}

export default function Task({ id, title }: TaskProps) {
    return (
        <View style={s.container}>
            <TouchableOpacity>

                <FontAwesome
                    name="trash"
                    
                />
            </TouchableOpacity>
        </View>
    )
}