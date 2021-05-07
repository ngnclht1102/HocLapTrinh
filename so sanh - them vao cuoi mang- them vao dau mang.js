import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  TextInput,
  Button,
  Text
} from 'react-native';
const App = () => {
  var danhBaDienThoai = [
    "1 co gai",
    4,
    33,
    "chuoi",
    1000
  ]
  // var danhBaDienThoai = [
  //   4,
  //   8,
  //   1,
  //   33
  // ]
  // them 1 phan tu vao cuoi
  // danhBaDienThoai.push()
  // them 1 phan tu vao dau
  // danhBaDienThoai.unshift()

  danhBaDienThoai.sort((a, b) => {
    console.log(a , b, typeof a, typeof b);

    if (typeof a != 'string' && typeof b == 'string')
      return 1
    if (typeof a == 'string' && typeof b == 'string') 
      return 0
    if (typeof a == 'string' && typeof b != 'string')
      return -1
    
    console.log('a -b = ' + a - b);
    return a - b
  })

  alert(danhBaDienThoai)

  return (
    <SafeAreaView >
      <StatusBar />
      
        <View
          style={styles.khung}>
          
        </View>
      
    </SafeAreaView>
  );
};

const styles = {
  khung: {
    backgroundColor: 'white',
  },
  textBoxDeNhapHeso: { 
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    borderRadius: 3,
    marginTop: 5,
  }
}


export default App;
