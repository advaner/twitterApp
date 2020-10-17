import React from "react"

import styles from "./style"

import Logo from "../../assets/twitterLogo.png"
import Tweet from "../../assets/tweet.png"
import PerfilPic from "../../assets/perfil.jpg"

import IconIon from "react-native-vector-icons/Ionicons"
import IconFontisto from "react-native-vector-icons/Fontisto"

import headerMainStyle from "../../components/headerMainStyle"

import { View, Text, Image } from "react-native"

const Home: React.FC = () => {
    return(
        <React.Fragment>

            <View style={styles.contentBox}>
                <View style={headerMainStyle.headerBox}>

                    <View style={headerMainStyle.headerMainBox}>

                        <View style={headerMainStyle.logoBox}>
                            <Image style={headerMainStyle.logo} source={Logo}></Image>
                        </View>

                        <View>
                            <Text style={headerMainStyle.text}>Home</Text>
                        </View>

                        <View style={headerMainStyle.perfilBox}>
                            <Image style={headerMainStyle.perfil} source={PerfilPic}></Image>
                        </View>
                    </View>
                </View>

                <View style={styles.tweetBox}>
                    <Image style={headerMainStyle.perfil} source={PerfilPic}></Image>
                </View>

                <View style={styles.footerBox}>
                    <View style={styles.footerMainBox}>

                        <View style={styles.footerIconBoxes}>
                            <IconIon name="home-sharp" size={25} color="#14bc95"/>
                        </View>

                        <View style={styles.footerIconBoxes}>
                            <IconIon name="search-outline" size={25} color="#202020"/>
                        </View>

                        <View style={styles.newTweetBox}>
                            <Image style={styles.newTweet} source={Tweet}></Image>
                        </View>

                        <View style={styles.footerIconBoxes}>
                            <IconIon name="notifications-outline" size={25} color="#202020"/>
                        </View>

                        <View style={styles.footerIconBoxes}>
                            <IconFontisto name="email" size={25} color="#202020"/>
                        </View>


                    </View>
                </View>

            </View>

        </React.Fragment>
    )
}

export default Home