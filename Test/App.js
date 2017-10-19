/**
 * Created by Rabbit 下午6:58
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    DeviceEventEmitter
} from 'react-native';

const { width , height} = Dimensions.get('window');

import { addNavigationHelpers, NavigationActions } from "react-navigation";
import {Provider}from 'react-redux';

// global.badgeNumber=11;

// import configureStore from '../Store/configureStore';
// const store = configureStore();

import Routers from './Routers';

export default class App extends Component {
    state={
        badgeNumber:11
    }
    componentDidMount(){
        this.subscription = DeviceEventEmitter.addListener('badge',(number)=>{
            // alert(number)
            this.setState({
                badgeNumber:number
            })
        });
    };

    componentWillUnmount(){
        this.subscription.remove();
    };
    render() {
        const { dispatch, nav } = this.props;
        // console.log(dispatch);



        // const navigation = addNavigationHelpers({
        //     dispatch,
        //     state: nav
        // });
        // 如果集成了redux，screenProps这个属性就不能直接使用了。
        // 应该是要通过action里面处理，这里只提供思路不做完善了
        // return (
        //     <Provider>
        //     <View style={{flex:1}}>
        //         <Routers screenProps={{themeColor:'yellow'}}/>
        //         <View style={{position:'absolute',
        //             width:width,height:20,bottom:29}}>
        //             <View style={{height:20,width:20,borderRadius:10,
        //                 backgroundColor:'red',marginLeft:width/3-55}}>
        //                 <Text style={{backgroundColor:'transparent',
        //                     alignSelf:'center',justifyContent:'center'}}>
        //                     {this.state.badgeNumber}
        //                 </Text>
        //             </View>
        //         </View>
        //     </View>
        //     </Provider>
        // );
        return(
            <View style={{flex:1}}>
                <Routers screenProps={{themeColor:'yellow'}}/>
                <View style={{position:'absolute',
                    width:width,height:20,bottom:29}}>
                    <View style={{height:20,width:20,borderRadius:10,
                        backgroundColor:'red',marginLeft:width/3-55}}>
                        <Text style={{backgroundColor:'transparent',
                            alignSelf:'center',justifyContent:'center'}}>
                            {this.state.badgeNumber}
                        </Text>
                    </View>
                </View>
            </View>
                )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});