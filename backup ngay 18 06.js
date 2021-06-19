import React, {
  useState,
  useEffect
} from 'react'
import moment from 'moment'
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
  const mangGiaoDienTamThoi = []

  for (var i = 0; i < danhSachDulieu.length; i++) {
    const nguoi = danhSachDulieu[i];
    const chuCaiDau = nguoi.name[0]
    mangGiaoDienTamThoi.push(
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
          <Text>So dien thoai: {nguoi.dob.format('MMM Do YY')}</Text>
        </View>
      </View>
    )
  }
  return mangGiaoDienTamThoi
}

const sap_xep_danh_ba_theo_ngay_sinh = (mangOriginal) => {
  mangOriginal.sort((nguoiA, nguoiB) => {


    const ngaySinhNguoiA = nguoiA.dob
    const ngaySinhNguoiB = nguoiB.dob
    console.log(nguoiA.dob);
    console.log(nguoiB.dob);
    const hieu_2_ngay_sinh = ngaySinhNguoiB.diff(ngaySinhNguoiA, 'days')
    // const hieu_2_ngay_sinh = ngaySinhNguoiA.diff(ngaySinhNguoiB, 'days')
    console.log(hieu_2_ngay_sinh);
    return hieu_2_ngay_sinh
  })
  return mangOriginal
}

const App = () => {

  const [hoVaTenNguoiMoi, setHoVaTenNguoiMoi] = useState("")
  const [sodienThoaiNguoiMoi, setSodienThoaiNguoiMoi] = useState("")
  const [maMauNguoiMoi, setMaMauNguoiMoi] = useState("")

  const [ngaySinh, setNgaySinh] = useState()
  const [thangSinh, setThangSinh] = useState()
  const [namSinh, setNamSinh] = useState()

  const [duLieuDanhBaDienThoai, setDuLieuDanhBaDienThoai] = useState([])
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


  const hamLuu = () => {
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

    // 31-05-1999
    const chuoiNgayDayDu =  ngaySinh + '-' + thangSinh  + '-' + namSinh
    const doiTuongNgay = moment(chuoiNgayDayDu, 'DD-MM-YYYY')



    const cophailangayhople = doiTuongNgay.isValid()

    // if ( cophailangayhople == false) {
    if (!cophailangayhople) {
      Alert.alert('Xin lỗi', "Mày nhập như thế này là ngu rồi!")
      return
    }

    // const coPhaiLaCuoiTuanHayKhong = doiTuongNgay.format('dddd') == "Saturday" || doiTuongNgay.format('dddd') == "Sunday"
    // const coPhaiLaCuoiTuanHayKhong = ["Saturday", "Sunday"].indexOf(doiTuongNgay.format('dddd')) >= 0

    // const coPhaiLaCuoiTuanHayKhong =  doiTuongNgay.isoWeekday() == 7 || doiTuongNgay.isoWeekday() == 6
    // console.log('set iso weekday: 0: ', doiTuongNgay.isoWeekday(0))
    // console.log('set iso weekday: 1: ', doiTuongNgay.isoWeekday(1))
    // console.log('set iso weekday: 2: ', doiTuongNgay.isoWeekday(2))
    // console.log('set iso weekday: 3: ', doiTuongNgay.isoWeekday(3))
    // console.log('set iso weekday: 4: ', doiTuongNgay.isoWeekday(4))
    // console.log('set iso weekday: 5: ', doiTuongNgay.isoWeekday(5))
    // console.log('set iso weekday: 6: ', doiTuongNgay.isoWeekday(6))
    // console.log('set iso weekday: 7: ', doiTuongNgay.isoWeekday(7))

    // const coPhaiLaCuoiTuanHayKhong =  [6,7].indexOf(doiTuongNgay.isoWeekday()) >= 0
    // Alert.alert(' Có phải là cuối tuần hay không ? '+ coPhaiLaCuoiTuanHayKhong + ' ngay ban nhap la: ' + doiTuongNgay.format('dddd'))


    const khaiMacWC = moment('20-11-2022', 'DD-MM-YYYY')

    // setInterval(() => {
    //   const ngayHienTai = moment()
    //   const conBaoNhieuNgay = khaiMacWC.diff(ngayHienTai, 'second')
    //   Alert.alert('conBaoNhieuNgay ' + conBaoNhieuNgay)
    // }, 1000)

    const ngayHienTai = moment()
    const conBaoNhieuNgay = khaiMacWC.diff(ngayHienTai, 'second')
    Alert.alert('conBaoNhieuNgay ' + conBaoNhieuNgay)


    // alert('Ban vua bam nut, va gia tri hien tai cua 3 bien la ' + hoVaTenNguoiMoi + "  "+ sodienThoaiNguoiMoi + " " + maMauNguoiMoi)
    const nguoiMoi = {
      name: hoVaTenNguoiMoi,
      phone: sodienThoaiNguoiMoi,
      color: maMauNguoiMoi,
      dob: doiTuongNgay
    }
    console.log(nguoiMoi);
    // push them vao cuoi
    const duLieuTamThoi = [...duLieuDanhBaDienThoai]
    duLieuTamThoi.unshift(nguoiMoi)

    console.log('Thêm người mới vào đầu biến duLieuDanhBaDienThoai ');
    setDuLieuDanhBaDienThoai(duLieuTamThoi)
  }

  const hamSapXep = () => {
    const duLieuMoiDaSapXep = sap_xep_danh_ba_theo_ngay_sinh(duLieuDanhBaDienThoai)
    const duLieuMoiDaSapXepBienMoi = [...duLieuMoiDaSapXep]
    console.log('duLieuMoiDaSapXep', duLieuMoiDaSapXepBienMoi);
    setDuLieuDanhBaDienThoai(duLieuMoiDaSapXepBienMoi)
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.khungBao}>
        {/*<View*/}
        {/*  style={styles.khung}>*/}
        {/*  {GiaoDienDanhBa}*/}
        {/*</View>*/}

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
              const ketquabuoc1_chuinthuong = text.toLowerCase() // red
              setMaMauNguoiMoi(ketquabuoc1_chuinthuong)
            }}
            placeholder="Nhập mã màu vào đây..."
            style={[
              styles.InputDungChung,
              styles.dungKhoangCachPhiaTrenNho
            ]}
          />
          <View style={styles.khungNhapNgayThangNam}>
            <TextInput
              onChangeText={(text) => {
                setNgaySinh(text)
              }}
              placeholder="Nhập ngày sinh..."
              style={[
                styles.InputDungChung,
                styles.dungKhoangCachPhiaTrenNho
              ]}
              keyboardType="numeric"
            />
            <TextInput
              onChangeText={(text) => {
                // var thangSinhTamThoi = parseInt(text)
                setThangSinh(text)
              }}
              placeholder="Nhập tháng sinh..."
              style={[
                styles.InputDungChung,
                styles.dungKhoangCachPhiaTrenNho
              ]}
              keyboardType="numeric"
            />
            <TextInput
              onChangeText={(text) => {
                // var namSinhTamThoi = parseInt(text)
                setNamSinh(text)
              }}
              placeholder="Nhập năm sinh..."
              style={[
                styles.InputDungChung,
                styles.dungKhoangCachPhiaTrenNho
              ]}
              keyboardType="numeric"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={hamLuu}
          style={styles.button}>
          <Text style={styles.buttonTitle}>Lưu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={hamSapXep}
          style={styles.button}>
          <Text style={styles.buttonTitle}>Sắp xếp</Text>
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
    width: '100%'
    // borderWidth: 1,
    // borderColor: 'red',
  },
  button: {
    backgroundColor: '#4fc3f7',
    width: 70,
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonTitle: {
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
  },
  khungNhapNgayThangNam: {
    flexDirection:  'row'
  }

}


export default App;
