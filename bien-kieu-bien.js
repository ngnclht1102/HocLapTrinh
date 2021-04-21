/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {

  var x, y, z       // Declare Variables
  x = 1
  y = "toi la nam"
  z = 12

  var co_can_show_y_khong = true

  console.log('gia tri cua bien co_can_show_y_khong la '+ co_can_show_y_khong);
  alert('cho nguoi dung')

  var yView = null
  if (co_can_show_y_khong === true) {
    yView = <Text>y la: {y}</Text> 
  } else {
    yView = null
  }

  return (
    <SafeAreaView >
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          <Text>XXXX la: {x}</Text>

          {
            yView
          }
          
          <Text>ZZZZZ la: {z}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
});

export default App;
