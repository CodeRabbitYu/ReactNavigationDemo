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
    View
} from 'react-native';

export default class Detail1 extends Component {


    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Detail1',
        headerRight:(
            <Text style={{color:'red',marginRight:20}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>我的</Text>
        ),
        // 设置滑动返回的距离
        gestureResponseDistance:{horizontal:300},

    });

    componentDidMount(){
        // 通过在componentDidMount里面设置setParams将title的值动态修改
        this.props.navigation.setParams({
            headerTitle:'Detail1',
            navigatePress:this.navigatePress,
        });
    }

    navigatePress = () => {
        alert('点击headerRight');
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to Detail1!
              </Text>
              <Text style={styles.instructions} onPress={()=>{
            const { navigate } = this.props.navigation;
              navigate('Detail2');
          }}>
                跳转到Detail2
              </Text>

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

