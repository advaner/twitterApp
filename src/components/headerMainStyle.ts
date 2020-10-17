import { StyleSheet } from "react-native"

const primaryColor = "#14bc95"
const secundaryColor  = "#ebebeb"
const borderColor = "#d6d6d66b"

const headerMainStyle = StyleSheet.create({
    
    headerBox: {
        width: "100%",
        height: 60,
    },

    headerMainBox: {
        flex: 1,
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

    },

    logoBox: {
        width: 50,
        height: 50,

        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        width: 35,
        height: 25,

        tintColor: primaryColor,

        resizeMode: "stretch",
    },

    text: {
        fontSize: 18,

        fontWeight: "600",
        fontFamily: "Roboto-Medium",
    },

    perfilBox: {
        width: 50,
        height: 50,

        justifyContent: "center",
        alignItems: "center",
    },

    perfil: {
        width: 40,
        height: 40,

        borderRadius: 200,

    },
})

export default headerMainStyle