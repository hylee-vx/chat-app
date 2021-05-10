import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const Start = props => {
    const [name, setName] = useState('');
    const [backgroundColour, setBackgroundColour] = useState('#fff');
    const colours = ['#090c08', '#474056', '#8a95a5', '#b9c6ae'];

    return (
        <ImageBackground source={require('../assets/background-image.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Chat App</Text>
                </View>
                <View style={styles.startContainer}>
                    <View style={styles.inputContainer}>
                        {/* <Image source={require('../assets/icon.svg')} style={styles.inputIcon} /> */}
                        <TextInput
                            style={styles.nameInput}
                            onChangeText={name => setName(name)}
                            value={name}
                            placeholder="Your Name"
                        />
                    </View>
                    <Text style={styles.chooseColourText}>Choose Background Colour</Text>
                    <View style={styles.colourButtonsContainer}>
                        {colours.map(colour => (
                            <View style={[styles.colourBorder, backgroundColour === colour
                                ? { borderColor: colour }
                                : null]}
                                key={colour}>
                                <TouchableOpacity onPress={() => setBackgroundColour(colour)} style={[styles.colourBtn, { backgroundColor: colour }]} />
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text
                            style={styles.btnText}
                            onPress={() => props.navigation.navigate('Chat', { name, backgroundColour })}
                        >Start Chatting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Start;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    titleContainer: {
        flex: 56,
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 45,
        fontWeight: '600',
        textAlign: 'center'
    },
    startContainer: {
        flex: 44,
        margin: '6%',
        padding: '6%',
        backgroundColor: '#fff'
    },
    inputContainer: {
        flexDirection: 'row'
    },
    // inputIcon: {
    //     alignItems: 'center'
    // },
    nameInput: {
        flex: 1,
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        // opacity: 0.5,
        height: 60,
        borderWidth: 1,
        borderRadius: 2,
        paddingLeft: 20
    },
    chooseColourText: {
        justifyContent: 'flex-end',
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        opacity: 1,
        marginTop: 50,
        marginBottom: 20
    },
    colourButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colourBtn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 25
    },
    colourBorder: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#fff'
    },
    btnContainer: {
        justifyContent: 'center',
        backgroundColor: '#757083',
        height: 60,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#757083'
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        margin: 'auto'
    }
});