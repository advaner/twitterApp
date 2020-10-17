import { StyleSheet } from "react-native"

const primaryColor = "#14bc95"
const secundaryColor  = "#ebebeb"

const styles = StyleSheet.create({

    contentBox: {
        flex: 1,
        backgroundColor: secundaryColor,
    },

    tweetBox: {
        width: "100%",
        minHeight: 150,
        maxHeight: 250,

        backgroundColor: "red",
    },















    footerBox: {
        width: "100%",
        height: 60,
        bottom: 0,
        position: "absolute",
    },

    footerMainBox: {
        flex: 1,
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",
    },

    footerIconBoxes: {
        width: 50,
        height: "100%",

        justifyContent: "center",
        alignItems: "center",
    },

    newTweetBox: {
        width: 50,
        height: 50,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: primaryColor,

        borderRadius: 100,

        marginBottom: 48,
    },

    newTweet: {
        width: 30,
        height: 30,

        tintColor: secundaryColor,
    },

})

export default styles