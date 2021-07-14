import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        color: "#f00",
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },

    button: {
        backgroundColor: "#f00",
        flexDirection: "row",
        width: "94%",
        height: 60,
        margin: 4,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 70
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },

    photosContainer: {
        // display: "flex",
        // position: "absolute",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        flexWrap: "wrap"

    },

    photo: {
        width: "45%",
        height: 170,
        borderRadius: 15,
        backgroundColor: "#ddd0d0d0",
        marginVertical: 10,
        marginHorizontal: "2%"
    },

    addPhotoButton: {
        width: "45%",
        height: 170,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd",
        marginVertical: 10,
        marginHorizontal: 5
    },

    avatar: {
        width: 200,
        height: 200,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#000",
        marginVertical: 30,
    },
});

export default styles;
