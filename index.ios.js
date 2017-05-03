import React from 'react';
import {View, AppRegistry} from 'react-native';
import {Header} from './src/components/common';
import LoginDetail from './src/components/LoginDetail';

const App = () => (
    <View>
        <Header title={'Ezytopup'}/>
        <LoginDetail/>
    </View>
);

AppRegistry.registerComponent('ezytopup', () => App);