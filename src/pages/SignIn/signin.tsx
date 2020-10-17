import React from "react"

import styles from "./style"

import HeaderSign from "../../components/HeaderSign"

import { View, Text, TouchableOpacity, TextInput, Image} from "react-native"

const SignIn: React.FC = ({ navigation }) => {

    return(
        <React.Fragment>
            <View style={styles.contentBox}>
                <View>
                    <HeaderSign/>
                </View>
                

                <View style={styles.inputBox}>
                    <Text style={styles.title}>Join Twitter today.</Text>

                    <TextInput style={styles.input} placeholder="Email"></TextInput>
                    <TextInput style={styles.input} placeholder="Password"></TextInput>

                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>

                                <Text style={styles.buttonText}>Sign In</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.forgotBox}>
                        <Text style={styles.forgotTitle} onPress={() => navigation.navigate("Forgot")}>Forgot your password?</Text>
                    </View>

                </View>
            </View>

        </React.Fragment>
    )
}

export default SignIn