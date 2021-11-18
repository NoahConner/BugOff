import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
    },
    linearGradient: {
        flex: 1,
    },
    cardContainer1: {
        marginTop: 45,
    },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#2B2E33',
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 15,
        paddingTop: 20,
        paddingBottom: 20,
    },
    cardtext: {
        color: '#fff',
        fontFamily: 'Poppins-Medium',
        fontSize: 15
    },
    cardIconBox: {
        width: 50,
        height: 40,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 25,
        marginRight: 'auto'
    },
    cardIcon: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
    },
    cardContent: {
        width: '70%',
        marginLeft: 'auto',
        justifyContent: 'center'
    }
});