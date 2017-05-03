import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({buttonName}) =>{
    const {buttonStyle, textStyle} = styles;
    return(
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}> {buttonName} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        height: 56,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }

};

export default Button;