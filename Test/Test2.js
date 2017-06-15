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
  Image
} from 'react-native';

const GankIcon = require('../resources/Gank.png');
const ShiTuIcon = require('../resources/ShiTu.png');

export default class Test2 extends Component {

  static navigationOptions = ({navigation,screenProps}) => ({
      // 这里面的属性和App.js的navigationOptions是一样的。
      headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Test2',
      tabBarLabel:navigation.state.params?navigation.state.params.tabBarLabel:'Test2',
      tabBarIcon: (({tintColor,focused}) => {
                return(
                    <Image
                        // 可以用过判断focused来修改选中图片和默认图片
                        source={!focused ? ShiTuIcon : GankIcon}
                        // 如果想要图标原来的样子可以去掉tintColor
                        style={[{height:35,width:35 }]}
                    />
                )
            }),
      headerRight:(
          <Text style={{color:'red',marginRight:20}} onPress={()=>navigation.state.params.navigatePress()}>我的</Text>
      ),
  })

  componentDidMount(){
    // 通过在componentDidMount里面设置setParams将title的值动态修改
    this.props.navigation.setParams({
        headerTitle:'干货集中营',
        tabBarLabel:'干货',
        navigatePress:this.navigatePress
    });
  }

  navigatePress = () => {
        alert('点击headerRight');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Test2 !
        </Text>
        <Text style={styles.instructions} onPress={()=>{
              const { navigate } = this.props.navigation;
              navigate('Detail1');
          }}>
          点我跳转到Detail1
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

