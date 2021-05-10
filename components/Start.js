import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const Start = props => {
    const [name, setName] = useState('');
    const [colour, setColour] = useState('');

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
                    <View style={styles.colourOptionsContainer}>
                        <View style={styles.colourOne} onPress={() => setColour('#090c08')} />
                        <View style={styles.colourTwo} onPress={() => setColour('#474056')} />
                        <View style={styles.colourThree} onPress={() => setColour('#8a95a5')} />
                        <View style={styles.colourFour} onPress={() => setColour('#b9c6ae')} />
                    </View>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text
                            style={styles.btnText}
                            onPress={() => props.navigation.navigate('Chat', { name, colour })}
                        >Start Chatting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

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
    colourOptionsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    colourOne: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#090c08',
        marginRight: 25
    },
    colourTwo: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#474056',
        marginRight: 25
    },
    colourThree: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#8a95a5',
        marginRight: 25
    },
    colourFour: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#b9c6ae',
        marginRight: 25
    },
    colourBorder: {
        height: 55,
        width: 55,
        borderRadius: 55 / 2,
        borderWidth: 3,
        borderColor: '#090c08'
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

export default Start;