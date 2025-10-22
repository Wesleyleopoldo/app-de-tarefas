import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        paddingVertical: 35,
        paddingHorizontal: 20,
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 1px 5px rgba(0,0,0,0.5)",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    text: {
        color: "#fff",
        width: "100%",
        fontWeight: "bold",
        fontSize: 20
    },

    textInputContainer: {
        width: "100%",
        display: "flex",
    },

    textInput: {
        backgroundColor: "#d0d0d0",
        width: "90%",
        marginTop: 15,
        borderRadius: 10,
        paddingHorizontal: 15,
    }
})