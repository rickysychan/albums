import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = props => {
    const { buttonStyle, 
            textStyle } = styles;

    return (
        <TouchableOpacity onPress={() => props.handleOnPress()} style={buttonStyle} > 
            <Text style={textStyle} > {props.children} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        MarginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;

