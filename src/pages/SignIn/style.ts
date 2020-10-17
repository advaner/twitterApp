import { StyleSheet } from "react-native"

const primaryColor = "#14bc95"
const secundaryColor  = "#ebebeb"

const styles = StyleSheet.create({

    contentBox: {
        flex: 1,
        backgroundColor: primaryColor,
    },
    
    title: {
        
        fontSize: 22,
        fontFamily: "Roboto-Medium",

        color: secundaryColor,

        marginBottom: 36,

    },

    inputBox: {
        width: "100%",

        flex: 1,

        justifyContent: "center",
        alignItems: "center",
        

    },

    input: {
        width: "70%",
        height: 55,

        borderRadius: 24,

        backgroundColor: secundaryColor,

        marginBottom: 12,

        color: "#6C7A87",

        fontSize: 16,
        fontFamily: "Roboto-Medium",
        textDecorationLine: "none",
        
        paddingHorizontal: 24,

    },

    buttonBox: {
        width: "100%",
        height: 65,

        justifyContent: "center",
        alignItems: "center",

        marginTop: 12,
        marginBottom: 36,

    },

    button: {
        width: "55%",
        height: 50,

        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: secundaryColor,
        borderRadius: 24,
    },

    buttonText: {
        color: primaryColor,

        fontSize: 18,
        fontFamily: "Roboto-Medium",

    },

    forgotBox: {
        width: "100%",
        height: 50,

        justifyContent: "center",
        alignItems: "center",

        marginBottom: 64,

    },

    forgotTitle: {
        color: secundaryColor,
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "Roboto-Medium",
    },
})

export default styles