import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  TextInput,
  Button
} from 'react-native';

// function hamA(params) {
  
// }

// const ham = (a, b, c ) => {

// }



// REPEAT YOUR SELF => DRY => DON'T REPEAT YOUR SELF
const App = () => {

  const [hesoA, setHesoA] = useState(null)
  const [hesoB, setHesoB] = useState(null)
  const [hesoC, setHesoC] = useState(null)

  const giaiPhuongTrinh = () => {
    
    const delta = hesoB * hesoB - 4 * hesoA * hesoC

    const x1 = (-hesoB + Math.sqrt(delta))/(2 * hesoA)
    const x2 = (-hesoB - Math.sqrt(delta))/(2 * hesoA)

    alert('x 1 la '+ x1 + ' |||||| nghiem x2 la '+ x2 )
  }

  return (
    <SafeAreaView >
      <StatusBar />
      
        <View
          style={styles.khung}>
          <TextInput
            onChangeText={ (text) => {
              console.log('he so A '+ text);
              setHesoA(text)
            }}
            style={styles.textBoxDeNhapHeso} 
            placeholder="Nhập hệ số A"
            keyboardType="numeric"
          />
          
          <TextInput
            onChangeText={ (text) => {
              console.log('he so B '+ text);
              setHesoB(text)
            }}
            style={styles.textBoxDeNhapHeso} 
            placeholder="Nhập hệ số B"
            keyboardType="numeric"
          />

          <TextInput
            onChangeText={ (text) => {
              console.log('he so C '+ text);
              setHesoC(text)
            }}
            style={styles.textBoxDeNhapHeso} 
            placeholder="Nhập hệ số C"
            keyboardType="numeric"
          />

          <Button
            title="Giai phuong trinh"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={giaiPhuongTrinh}
          />
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
