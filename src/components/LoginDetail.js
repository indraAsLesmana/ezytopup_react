import React from 'react';
import {View, TextInput} from 'react-native';
import LoginForm from './LoginForm';
import Button from './Button';

const LoginDetail = () => {
    return (
        <LoginForm>
            <View style={styles.containerStyle}>
                <TextInput
                    placeholder={'Username'}
                    style={styles.textInputStyle}/>
            </View>
            <View style={styles.containerStyle}>
                <TextInput
                    placeholder={'E-mail'}
                    style={styles.textInputStyle}/>
            </View>
            <View style={styles.containerStyle}>
                <Button buttonName={'Login'}/>
            </View>
            <View style={styles.containerStyle}>
                <Button buttonName={'Sign up'}/>
            </View>
        </LoginForm>
    );
};

const styles = {
    containerStyle:{
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd'
    },
    textInputStyle:{
        height: 56,
        alignSelf: 'stretch'
    }
};

export default LoginDetail;