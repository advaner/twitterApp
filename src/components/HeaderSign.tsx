import React from "react"

import Logo from "../assets/twitterLogo.png"

import headerSignStyles from "./headerSignStyle"

import { View, Image} from "react-native"

const HeaderSign: React.FC = () => {
    return(
        <React.Fragment>

            <View style={headerSignStyles.logoBox}>

                <Image style={headerSignStyles.logo} source={Logo}></Image>

            </View>

        </React.Fragment>
    )
}

export default HeaderSign