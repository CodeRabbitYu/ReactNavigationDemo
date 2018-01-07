/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import NavStyle from './NavStyle.js';

import { NavigationActions } from 'react-navigation'


const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'MyTab' })
    ]
});

const navigateAction = NavigationActions.navigate({
    routeName: 'Detail1',

    params: {headerTitle:'hahaha'},

    action: NavigationActions.navigate({ routeName: 'Detail1'})
})

export default class Detail2 extends Component {
    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        header:(
            <NavStyle backgroundColor={screenProps.themeColor} leftClick={()=>navigation.state.params?navigation.state.params.navigatePress():null}/>
        )
    })

    componentDidMount(){
        // 通过在componentDidMount里面设置setParams将title的值动态修改
        this.props.navigation.setParams({
            navigatePress:this.navigatePress
        });
    }

    navigatePress = () => {
        const { goBack } = this.props.navigation;
        goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Detail2!
                </Text>
                <Text style={styles.instructions}>
                    本页面的导航栏是纯自定义的，点击事件需要通过setParams来添加
                </Text>
                <Button title={'reset'} onPress={()=>{
                    this.props.navigation.dispatch(resetAction)
                }} />
                <Button title={'navigate'} onPress={()=>{
                    this.props.navigation.dispatch(navigateAction)
                }}/>
                <Button title={'返回指定页面'} onPress={()=>{
                    this.props.navigation.navigate('Test1')
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize:18
    },
});

