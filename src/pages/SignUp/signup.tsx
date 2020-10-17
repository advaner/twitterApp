import React from "react"

import styles from "./style"

import HeaderSign from "../../components/HeaderSign"

import { View, Text, TextInput, TouchableOpacity  } from "react-native"


const SignUp: React.FC = ( {navigation} ) => {
    return(
        <React.Fragment>
            <View style={styles.contentBox}>
                <View>
                    <HeaderSign/>    
                </View>

                <View style={styles.inputBox}>
                    <Text style={styles.title}> Join Twitter today. </Text>
            
                    <TextInput style={styles.input} placeholder="Account"></TextInput>

                    <TextInput style={styles.input} placeholder="Email"></TextInput>

                    <TextInput style={styles.input} placeholder="Password"></TextInput>

                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.loginBox}>
                        <Text style={styles.loginTitle} onPress={() => navigation.navigate("SignIn")}>Already have an account?</Text>
                    </View>


                </View>
            </View>

        </React.Fragment>
    )
}

export default SignUp