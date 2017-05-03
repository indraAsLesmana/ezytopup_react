import React from 'react';
import {View, Text} from 'react-native';

const Header = ({title}) => {
    const { headerContainer, titleStyle } = styles;
    return (
        <View style={headerContainer}>
            <Text style={titleStyle}>{title}</Text>
        </View>
    );
};

const styles = {
    headerContainer: {
        paddingTop: 15,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f39c12',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    titleStyle: {
        fontSize: 20,
        color: '#FFF'
    }
};

export default Header;