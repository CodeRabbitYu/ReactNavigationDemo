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

import NavStyle from './NavStyle.js';

export default class Detail2 extends Component {
  static navigationOptions = ({navigation,screenProps}) => ({
      // 这里面的属性和App.js的navigationOptions是一样的。
      headerTitle:'Detail1',
      headerRight:(
          <Text style={{color:'red',marginRight:20}} onPress={()=>navigation.state.params.navigatePress()}>我的</Text>
      ),
      header:(
        <NavStyle leftClick={()=>navigation.state.params.navigatePress()}/>
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
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
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

