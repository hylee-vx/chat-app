import React from 'react';
import { View, Text } from 'react-native';

const Chat = props => {
    let { name, colour } = props.route.params;
    props.navigation.setOptions({ title: name });

    return (
        <View style={{ flex: 1, backgroundColor: colour }}>
            <Text>
                What's on your mind?
            </Text>
        </View>
    );
};

export default Chat;