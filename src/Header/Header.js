import React, { useContext } from 'react';
import s from './HeaderStyle'
import { moderateScale } from 'react-native-size-matters';
import {
    SafeAreaView,
    Text,
    View,
    Image
} from 'react-native';
import Svg, { G, Path, Line } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AppContext from '../Context/AppContext';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Header = ({ navigation, HassideBars }) => {

    const appcontext = useContext(AppContext)

    const sideBars = (color) => {
        return (
            <Svg xmlns="http://www.w3.org/2000/svg" width={moderateScale(29)} height={moderateScale(28)} viewBox="0 0 78.657 60">
                <G id="Bars" transform="translate(-5089.343 -2429)">
                    <Path id="Path_506" data-name="Path 506" d="M5128.64,2437.166q-18.084,0-36.17,0c-1.954,0-3.2-1.79-3.1-4.4.077-2,1.179-3.589,2.584-3.734a5.154,5.154,0,0,1,.525-.014q36.171,0,72.341-.011a2.625,2.625,0,0,1,2.541,1.557,5.34,5.34,0,0,1,.322,4.343c-.5,1.457-1.361,2.255-2.524,2.259-3.211.012-6.423.007-9.634.008Z" fill={color} />
                    <Path id="Path_507" data-name="Path 507" d="M5123.1,2463.082q-15.327,0-30.652,0c-1.909,0-3.143-1.756-3.073-4.317.057-2.06,1.168-3.688,2.613-3.822.2-.019.409-.013.613-.013q30.477,0,60.953,0c2.055,0,3.3,1.709,3.2,4.374-.07,1.984-1.177,3.615-2.569,3.761a9.911,9.911,0,0,1-1.05.019Z" fill={color} />
                    <Path id="Path_508" data-name="Path 508" d="M5110.4,2489c-6.013,0-12.026.009-18.039-.005-2.017,0-3.37-2.361-2.937-5.049.29-1.8,1.37-3.069,2.727-3.089,2.189-.033,4.379-.012,6.568-.012q14.886,0,29.773,0c1.757,0,2.98,1.581,3.036,3.864.061,2.515-1.156,4.278-3,4.282q-8.581.019-17.163.006Z" fill={color} />
                </G>
            </Svg>
        )
    }

    return (
        <View style={s.header}>
            {
                HassideBars ? (
                    <>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            {sideBars(appcontext.buzzOn ? '#fff' : '#1a1a1a')}
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icons name="chevron-left" color="#000" style={{ fontSize: moderateScale(24) }} />
                        </TouchableOpacity>
                    </>
                )
            }

            <View>
                {
                    appcontext.buzzOn ? (
                        <>
                            <Image
                                style={s.tinyLogo}
                                source={require('../assets/png/logoD.png')}
                            />
                        </>
                    ) : (
                        <>
                            <Image
                                style={s.tinyLogo}
                                source={require('../assets/logo.png')}
                            />
                        </>
                    )
                }

            </View>
            <TouchableOpacity style={{ opacity: 1 }}>
                {sideBars('transparent')}
            </TouchableOpacity>
        </View>
    )
}

export default Header;