import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text
} from 'react-native';
const App = () => {
  var duLieuDanhBaDienThoai = [
    {
      name: "Quy",
      phone: "091234555",
      color: 'pink',
    },
    {
      name: "Dat",
      phone: "091234551",
      color: 'pink',
    },
    {
      name: "Hoang",
      phone: "091234552",
      color: 'violet',
    },
    {
      name: "Hoa",
      phone: "091234559",
      color: 'yellow',
    },
    {
      name: "Nghia",
      phone: "091234999",
      color: 'red',
    },
  ]
  // const quy = danhBaDienThoai[0]
  // const nghia = danhBaDienThoai[4]
  // alert(quy.name + ' ' + quy.phone)
  // alert(nghia.name + ' ' + nghia.phone)
  
  var GiaoDienDanhBa = []

  for (var i = 0; i < duLieuDanhBaDienThoai.length; i++) {
    const nguoi = duLieuDanhBaDienThoai[i];
    const chuCaiDau = nguoi.name[0]
    GiaoDienDanhBa.push(
      <View style={styles.contactItem}>
        <View style={styles.contactItemLeft}>
          <Text style={[
            styles.contactItemLeft_Chu,
            { backgroundColor: nguoi.color }
          ]}>{chuCaiDau}</Text>
        </View>
        <View style={styles.contactItemRight}>
          <Text>Ten: {nguoi.name}</Text>
          <Text>So dien thoai: {nguoi.phone}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView >
      <StatusBar />
        <View
          style={styles.khung}>
          {GiaoDienDanhBa}
        </View>
    </SafeAreaView>
  );
};

const styles = {
  contactItem: { 
    flexDirection: 'row',
    width: '80%',
    borderColor: 'gray',
    back: 'gray',
    borderWidth: 1,
    color: 'black',
    borderRadius: 8,
    marginTop: 10,
  },
  contactItemLeft: {
    marginRight: 20,
    marginLeft: 20,
  },
  contactItemLeft_Chu: {
    backgroundColor: 'pink',
    width: 30,
    height: 30,
    borderRadius: 30/2,
    color: 'gray',
    textAlign: 'center'
  }
}


export default App;
