import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View,} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/_(542).jpg")}
        >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/EDS.png")}/>
            <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton:{
        width:'100%',
        height: 70,
        backgroundColor: 'pink',
    },
    registerButton:{
        width:'100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:"center"

    }
    
});

export default WelcomeScreen;