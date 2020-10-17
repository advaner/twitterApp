import { StyleSheet } from "react-native"

const primaryColor = "#14bc95"
const secundaryColor  = "#ebebeb"

const headerSignStyles = StyleSheet.create({
    
    logoBox: {
        width: "100%",
        height: 300,

        justifyContent: "center",
        alignItems: "center",

    },

    logo: {
        width: 60,
        height: 50,

        resizeMode: "stretch",

        tintColor: secundaryColor,

    },
})

export default headerSignStyles