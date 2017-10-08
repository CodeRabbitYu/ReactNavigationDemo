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

import App from './Test/Routers.js';

export default class ReactNavigationDemo extends Component {
  render() {
    return (
     <App />
    );
  }
}

AppRegistry.registerComponent('ReactNavigationDemo', () => ReactNavigationDemo);
