import React, {
  useState,
  useEffect
} from 'react'

import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native'

// nhan dau vao la 1 danh sach du lieu (1 mang du lieu)
// va no se tao ra 1 mang Giao Dien
const xay_Dung_Danh_Sach_GiaoDien__Tu_Danh_Sach_Du_Lieu = (danhSachDulieu) => {
  const danhsachGiaoDien = []

  for (var i = 0; i < danhSachDulieu.length; i++) {
    const nguoi = danhSachDulieu[i];
    const chuCaiDau = nguoi.name[0]
    danhsachGiaoDien.push(
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

  return danhsachGiaoDien
}

const App = () => {

  const [hoVaTenNguoiMoi, setHoVaTenNguoiMoi] = useState("")
  const [sodienThoaiNguoiMoi, setSodienThoaiNguoiMoi] = useState("")
  const [maMauNguoiMoi, setMaMauNguoiMoi] = useState("")

  const [duLieuDanhBaDienThoai, setDuLieuDanhBaDienThoai] = useState([
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
  ])
  const [GiaoDienDanhBa, setGiaoDienDanhBa] = useState(null)

  // bất cứ khi nào, cái biến duLieuDanhBaDienThoai được gán, hoặc bị thay đổi (thêm vào đầu, thêm vào cuối, ...)
  useEffect(() => {
    console.log('Biến duLieuDanhBaDienThoai được gán hoặc thay đổi');
    console.log('Đang xây dựng giao diện từ dữ liệu duLieuDanhBaDienThoai mới ');

    const danhSachGiaoDienMoi = xay_Dung_Danh_Sach_GiaoDien__Tu_Danh_Sach_Du_Lieu(duLieuDanhBaDienThoai)
    console.log('Xây dựng xong giao diện mới từ dữ liệu duLieuDanhBaDienThoai mới ');

    console.log('Cập nhật lại giao diện');
    setGiaoDienDanhBa(danhSachGiaoDienMoi)
  }, [duLieuDanhBaDienThoai])

  // <SafeAreaView style={{ backgroundColor: 'black' }} >
  //     <StatusBar barStyle="light-content" />
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.khungBao}>
        <View
          style={styles.khung}>
          {GiaoDienDanhBa}
        </View>

        <View style={styles.meCuaTextInput}>
          <TextInput
            onChangeText={
              (text) => {
                setHoVaTenNguoiMoi(text)
              }
            }
            style={styles.InputDungChung}
            placeholder="Nhập tên vào đây..."
          />

          <TextInput
            onChangeText={(text) => {
              console.log("sdt la "+ text)
              // Loai bo dau ., hoac bao loi khi nguoi dung nhap dau . vo
              console.log('text goc ma nguoi dung nhap vao '+ text)
              var output  = text.replace(/\./g, "")

              console.log('He dieu hanh dang chay '+Platform.OS)
              const heDieuHanh = Platform.OS
              if (heDieuHanh == "android") {
                const textDaThayThe_Lan2 = output.replace(/,/g, "")
                const textDaThayThe_Lan3 = textDaThayThe_Lan2.replace(/-/g, "")
                output = textDaThayThe_Lan3.replace(/ /g, "")
              } else if (heDieuHanh == "ios") {
                // khong lam gi ca
              }

              console.log('output cuoi cung '+output)
              setSodienThoaiNguoiMoi(output)
            }}
            placeholder="Nhập số điện thoại vào đây..."
            style={[
              styles.InputDungChung,
              styles.dungKhoangCachPhiaTrenNho
            ]}
            keyboardType="numeric"
          />

          <TextInput
            onChangeText={(text) => {
              // console.log("ma mau la "+ text)
              // Chi cho phep nguoi dung nhap vao ma mau:

              // ma hex: #f3f3f3
              // va 1 trong cac mau: red, green, blue, yellow, white, black, purple, pink

              // buoc 1, chuyen chu in hoa thanh chu in thuong
              const ketquabuoc1_chuinthuong = text.toLowerCase() // red


              setMaMauNguoiMoi(ketquabuoc1_chuinthuong)
            }}
            placeholder="Nhập mã màu vào đây..."
            style={[
              styles.InputDungChung,
              styles.dungKhoangCachPhiaTrenNho
            ]}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            const mang_mau_quy_dinh = ["red", "green", "blue", "yellow", "white", "black", "purple", "pink"]
            // cach 1: dung ham for () de duyet qua mang de kiem tra xem text nguoi dung nhap co thuoc 1 trong
            // cach 2: dung ham cua mang
            const index_cua_mau_nguoi_dung_nhap =  mang_mau_quy_dinh.findIndex((phantu) => {
              if (phantu == maMauNguoiMoi)
                return true
              return false
            })
            // const co_tim_thay = index_cua_mau_nguoi_dung_nhap != -1
            const khong_tim_thay = index_cua_mau_nguoi_dung_nhap == -1
            if (khong_tim_thay) {
              Alert.alert('Xin lỗi', "Màu bạn nhập không phù hợp")
              return
            }

            // BÀI TẬP VỀ NHÀ:  Xử lý làm sao đấy  để người dùng nhập được mã màu HEXA:
            // bắt đầu bằng dấu #
            // có 7 ký tự
            // .....

            // alert('Ban vua bam nut, va gia tri hien tai cua 3 bien la ' + hoVaTenNguoiMoi + "  "+ sodienThoaiNguoiMoi + " " + maMauNguoiMoi)
            const nguoiMoi = {
              name: hoVaTenNguoiMoi,
              phone: sodienThoaiNguoiMoi,
              color: maMauNguoiMoi,
            }
            // console.log(nguoiMoi);
            // push them vao cuoi
            const duLieuTamThoi = [...duLieuDanhBaDienThoai]
            duLieuTamThoi.unshift(nguoiMoi)

            console.log('Thêm người mới vào đầu biến duLieuDanhBaDienThoai ');
            setDuLieuDanhBaDienThoai(duLieuTamThoi)
          }}
          style={styles.nutLuu}>
          <Text style={styles.chuCuaNutLuu}>Lưu</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = {
  khungBao: {
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center'
  },
  meCuaTextInput: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  nutLuu: {
    backgroundColor: '#4fc3f7',
    width: 70,
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  chuCuaNutLuu: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
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
  },
  InputDungChung: {
    marginHorizontal: 20,
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },
  dungKhoangCachPhiaTrenNho: {
    marginTop: 6,
  }

}


export default App;
