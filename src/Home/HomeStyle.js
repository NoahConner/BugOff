import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor: '#fff',
    },
    linearGradient: {
        flex: 1,
    },
    acTxt: {
        fontFamily: 'Poppins-Regular',
        color: '#000',
        fontSize: moderateScale(16),
        textAlign: 'center'
    },
    acTxtO: {
        marginTop: moderateScale(30)
    },
    liner: {
        overflow: 'hidden',
        width: '100%',
    },
    mosDiv: {
        marginTop: moderateScale(150),
        position: 'relative',
    },
    ciecleMos: {
        height: moderateScale(180),
        width: moderateScale(180),
        borderWidth: moderateScale(3),
        borderRadius: moderateScale(100),
        position: 'absolute',
        left: moderateScale(95),
        top: moderateScale(-80)
    },
    buzol:{
        top: moderateScale(-60),
        borderColor:'#fff'
    },
    activebtn: {
        alignItems: 'center',
        marginTop: moderateScale(150),
        justifyContent: 'center',
        position:'relative',
        zIndex:10
    },
    activebtnBZ:{
        marginTop: moderateScale(130),
    },
    activebtnBZo:{
        marginTop: moderateScale(130),
    },
    btn: {
        backgroundColor: '#B4FFFF',
        // padding: moderateScale(30),
        borderRadius: moderateScale(100),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        height: moderateScale(120), 
        width: moderateScale(120),
        alignItems:'center',
        justifyContent:'center',
        // display:'none'
    },
    btnOn:{
        shadowColor: "transparent",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,

        elevation: 0,
    },
    acTxtO2:{
        marginTop: moderateScale(50),
        alignItems:'center',
        // backgroundColor:'#00205b',
        width:moderateScale(200),
        overflow:'hidden',
        alignItems:'center'
    },
    mt0:{
        marginTop:moderateScale(4)
    },
    tinyLogo:{
        // backgroundColor:'#000',
        height:moderateScale(89),
        width:moderateScale(130),
        position: 'absolute',
        top:moderateScale(40),
        left:moderateScale(25),
    },
    box:{
        height:'100%',
        backgroundColor: '#5AD2F4'
      },
      onTxt:{
          color:'#fff'
      },
      dflex:{
          alignItems:'center'
      },
      cLogo:{
          position:'absolute',
        //   top:moderateScale(-1),
          left:moderateScale(-2),
          zIndex:-1,
        //   backgroundColor:'#000',
          width:'100%',
          alignItems:'center'
      },
});