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

  const [hesoA, setHesoA] = useState(0)
  const [hesoB, setHesoB] = useState(0)
  const [hesoC, setHesoC] = useState(0)

  const [nghiemX1, datNghiemX1] = useState(null)
  const [nghiemX2, datNghiemX2] = useState(null)

  // var hesoA = 0
  // var hesoB = 0
  // var hesoC = 0

  const giaiPhuongTrinh = () => {
    
    const delta = hesoB * hesoB - 4 * hesoA * hesoC

    const x1 = (-hesoB + Math.sqrt(delta))/(2 * hesoA)
    const x2 = (-hesoB - Math.sqrt(delta))/(2 * hesoA)

    // alert('x 1 la '+ x1 + ' |||||| nghiem x2 la '+ x2 )
    datNghiemX1(x1)
    datNghiemX2(x2)
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
              // hesoA = text
            }}
            style={styles.textBoxDeNhapHeso} 
            placeholder="Nhập hệ số A"
            keyboardType="numeric"
          />
          
          <TextInput
            onChangeText={ (text) => {
              console.log('he so B '+ text);
              setHesoB(text)
              // hesoB = text
            }}
            style={styles.textBoxDeNhapHeso} 
            placeholder="Nhập hệ số B"
            keyboardType="numeric"
          />

          <TextInput
            onChangeText={ (text) => {
              console.log('he so C '+ text);
              setHesoC(text)
              // hesoC = text
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

          <Text>He so A la: {hesoA}</Text>
          <Text>He so B la: {hesoB}</Text>
          <Text>He so C la: {hesoC}</Text>
          <Text></Text>
          <Text></Text>
          <Text>Nghiem x1: {nghiemX1}</Text>
          <Text>Nghiem x2: {nghiemX2}</Text>
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
