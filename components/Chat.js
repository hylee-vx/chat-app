import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Chat = props => {
    const { name, backgroundColour } = props.route.params;
    props.navigation.setOptions({ title: name });

    return (
        <View style={[styles.container, { backgroundColor: backgroundColour }]}>
            <Text style={styles.text}>
                What's on your mind?
            </Text>
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 30
    }
})