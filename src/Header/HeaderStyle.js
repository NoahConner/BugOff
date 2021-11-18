import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:moderateScale(20),
        // backgroundColor:'red',
        paddingVertical:moderateScale(15)
    },
    tinyLogo:{
        height:moderateScale(32),
        width:moderateScale(110),
    }
});