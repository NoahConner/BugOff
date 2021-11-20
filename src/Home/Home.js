import React, { useState, useRef, useContext, useEffect } from 'react';
import s from './HomeStyle'
import {
    SafeAreaView,
    Text,
    View,
    Image,
    Animated,
    Easing,
    ImageBackground
} from 'react-native';
import Svg, {
    G,
    Path
} from 'react-native-svg';
import Header from '../Header/Header';
import LinearGradient from 'react-native-linear-gradient';
import Line from '../assets/svg/bars1.svg'
import Line2 from '../assets/svg/deactive-bars2.svg'
import { moderateScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AacB from '../assets/svg/active-bars.svg'
import AppContext from '../Context/AppContext';
import Cmos from '../assets/svg/c-mos.svg'
import RNBootSplash from "react-native-bootsplash";
import SoundPlayer from 'react-native-sound-player'
import KeepAwake from 'react-native-keep-awake';

const Home = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide()
        }, 1000)
    }, []);
    let sound1;

    const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
    const [onFreqH, setonFreqH] = useState(true)

    const appcontext = useContext(AppContext)

    const [animatedValue, setanimatedValue] = useState(new Animated.Value(-10));
    const [animatedValue2, setanimatedValue2] = useState(new Animated.Value(-10));
    const [animatedValue3, setanimatedValue3] = useState(new Animated.Value(-10));
    const [Clight, setClight] = useState(new Animated.Value(-10));
    const [Mos, setMos] = useState(new Animated.Value(-10));
    // const [noLoops,setnoLoops] = useState(undefined)
    // setnoLoops(whoosh.setNumberOfLoops(-1))

    useEffect(() => {
        runAnimation()
        liner();
        linerSmall();
        clih()
        MosA()
        // playSound()
    }, []);

    const playSong = () => {
        try {
            SoundPlayer.playSoundFile('frequency', 'wav')
        } catch (e) {
            alert('Cannot play the file')
            console.log('cannot play the song file', e)
        }
    }

    const getInfo = async () => { // You need the keyword `async`
        try {
            const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
            // console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
        } catch (e) {
            // console.log('There is no song playing', e)
        }
    }

    const _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
        // console.log('finished playing', success)
        if (success && appcontext.buzzOn) {
            playSong()
            getInfo()
        }
    })

    const handleAnimation = (con) => {
        setonFreqH(false)
        setTimeout(() => {
            appcontext.setbuzzOn(!appcontext.buzzOn)
            setonFreqH(true)
            changeKeepAwake(appcontext.buzzOn)
            if (!con) {
                playSong()
                getInfo()
            } else {
                try {
                    SoundPlayer.stop()
                } catch (e) {
                    alert('Cannot play the file')
                }
            }
        }, 2010)
        Animated.timing(rotateAnimation, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start(() => {
            rotateAnimation.setValue(0);
        });
    };

    const interpolateRotating = rotateAnimation.interpolate({
        inputRange: [0, 0.3, 0.5, 0.8, 1],
        outputRange: ['0deg', '720deg', '0deg', '320deg', '0deg'],
    });

    const animatedStyle = {
        transform: [
            {
                rotate: interpolateRotating,
            },
        ],
    };

    const CurrentLogo = () => {
        return (
            <Svg xmlns="http://www.w3.org/2000/svg" width={moderateScale(60)} height={moderateScale(60)} viewBox="0 0 200.842 227.84">
                <G id="current-logo" transform="translate(-5493.578 -3938.08)">
                    {
                        onFreqH ? (
                            <>
                                <Path id="Path_509" data-name="Path 509" d="M5649.62,4036.29a3.347,3.347,0,0,1-.22.66c-.18.42-.41.84-.62,1.26l-40.46,79.48q-11.895,23.385-23.77,46.77c-.6,1.2-.92,1.42-.94,1.43a1.107,1.107,0,0,1-.28.03.487.487,0,0,1-.38-.13.836.836,0,0,1-.12-.59c.52-5.4,1.15-10.92,1.75-16.25l.44-3.87q1.215-10.92,2.47-21.86l2.1-18.61q1.291-11.445,2.61-22.87c.24-1.99.59-4.99-1.62-7.47s-5.25-2.49-7.07-2.49h-25.16q-8.835,0-17.66-.01a3.15,3.15,0,0,1-2.23-.57c-.11-.17-.13-.94.47-2.14q14.94-30.045,29.89-60.08,17.355-34.89,34.71-69.77a4.281,4.281,0,0,1,.76-1.13h.61a2.838,2.838,0,0,1,.2,1.97q-1.65,14.055-3.24,28.11l-.9,7.89q-2.175,19.035-4.34,38.07c-.16,1.44-.32,2.87-.47,4.31-.32,3.03-.62,5.88-1.03,8.75a7.869,7.869,0,0,0,1.64,6.53,8.111,8.111,0,0,0,6.34,2.53q12.33-.03,24.55-.04,10.665,0,21.33.03A3.215,3.215,0,0,1,5649.62,4036.29Z" fill="#1a1a1a" />
                            </>
                        ) : (
                            null
                        )
                    }
                    <Path id="Path_510" data-name="Path 510" d="M5514.26,4019.04a80.933,80.933,0,0,0-5.73,43.98c4.92,32.76,22.97,55.98,53.65,69.03-.59,4.87-1.14,9.73-1.65,14.5a100.593,100.593,0,0,1-47.29-35.14,98.907,98.907,0,0,1-18.12-42.18,92.452,92.452,0,0,1-1.54-17.06c.69-31.23,12.17-56.19,35.08-76.21a97.438,97.438,0,0,1,39.93-21.06l-.33.66q-4.23,8.535-8.43,17.07a1.37,1.37,0,0,1-.08.15c-.01,0-.08.05-.24.12C5538.42,3982.3,5523.19,3997.83,5514.26,4019.04Z" fill="#1a1a1a" />
                    <Path id="Path_511" data-name="Path 511" d="M5514.26,4019.04a80.933,80.933,0,0,0-5.73,43.98c4.92,32.76,22.97,55.98,53.65,69.03-.59,4.87-1.14,9.73-1.65,14.5a100.593,100.593,0,0,1-47.29-35.14,98.907,98.907,0,0,1-18.12-42.18,92.452,92.452,0,0,1-1.54-17.06c.69-31.23,12.17-56.19,35.08-76.21a97.438,97.438,0,0,1,39.93-21.06l-.33.66q-4.23,8.535-8.43,17.07a1.37,1.37,0,0,1-.08.15c-.01,0-.08.05-.24.12C5538.42,3982.3,5523.19,3997.83,5514.26,4019.04Z" fill="#1a1a1a" />
                    <Path id="Path_512" data-name="Path 512" d="M5694.42,4054.33c-.47,24.98-10.14,48.11-27.96,66.88a99.846,99.846,0,0,1-46.83,27.78q4.59-9.03,9.18-18.07c20.87-9.54,35.93-24.89,44.75-45.61a81.8,81.8,0,0,0,5.95-44.41c-4.58-31.39-21.73-54.28-50.99-68.04-.84-.39-1.72-.79-2.65-1.16.43-3.5.83-6.99,1.22-10.39.14-1.29.29-2.59.44-3.89,24.15,8.72,42.68,24.7,55.12,47.52C5690.55,4019.44,5694.29,4035.13,5694.42,4054.33Z" fill="#1a1a1a" />
                    <Path id="Path_513" data-name="Path 513" d="M5694.42,4054.33c-.47,24.98-10.14,48.11-27.96,66.88a99.846,99.846,0,0,1-46.83,27.78q4.59-9.03,9.18-18.07c20.87-9.54,35.93-24.89,44.75-45.61a81.8,81.8,0,0,0,5.95-44.41c-4.58-31.39-21.73-54.28-50.99-68.04-.84-.39-1.72-.79-2.65-1.16.43-3.5.83-6.99,1.22-10.39.14-1.29.29-2.59.44-3.89,24.15,8.72,42.68,24.7,55.12,47.52C5690.55,4019.44,5694.29,4035.13,5694.42,4054.33Z" fill="#1a1a1a" />
                </G>
            </Svg>

        )
    }


    const runAnimation = () => {
        animatedValue.setValue(10);
        Animated.timing(animatedValue, {
            toValue: -10,
            duration: 1500,
            useNativeDriver: true,
            delay: 1000
        }).start(() => runAnimation());
    }
    const valuo = animatedValue.interpolate({
        inputRange: [-10, 0, 10],
        outputRange: [0, 1, 0],
    });


    const liner = () => {
        animatedValue2.setValue(100);
        Animated.timing(animatedValue2, {
            toValue: -10,
            duration: 6000,
            useNativeDriver: true,
        }).start(() => liner());
    }
    const linerValue = animatedValue2.interpolate({
        inputRange: [-10,50,100],
        outputRange: [-0,-900, -0],
    });


    const linerSmall = () => {
        animatedValue3.setValue(100);
        Animated.timing(animatedValue3, {
            toValue: -10,
            duration: 4000,
            useNativeDriver: true,
        }).start(() => linerSmall());
    }
    const linerValue2 = animatedValue3.interpolate({
        inputRange: [-10,50,100],
        outputRange: [-0,-700, -0],
    });


    const clih = () => {
        Clight.setValue(10);
        Animated.timing(Clight, {
            toValue: -10,
            duration: 200,
            useNativeDriver: true,
            delay: 700
        }).start(() => clih());
    }
    const clihO = Clight.interpolate({
        inputRange: [-10, 0, 10],
        outputRange: ['0deg', '60deg', '0deg'],
    });

    const MosA = () => {
        Mos.setValue(10);
        Animated.timing(Mos, {
            toValue: -10,
            duration: 100,
            useNativeDriver: true,
        }).start(() => MosA());
    }
    const MosD = Mos.interpolate({
        inputRange: [-10, 0, 10],
        outputRange: [0, 7, 0],
    });
    const MosDT = Mos.interpolate({
        inputRange: [-10, 0, 10],
        outputRange: [0, 10, 0],
    });

    const changeKeepAwake = (shouldBeAwake) => {
        if (!shouldBeAwake) {
            KeepAwake.activate();
            //  console.log(KeepAwake)
        } else {
            KeepAwake.deactivate();
        }
    }


    return (
        <SafeAreaView style={s.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={appcontext.buzzOn ? ['#1E2024', '#1E2024'] : ['#E6FFFF', '#E3FFFF']} style={s.linearGradient}>
                <View >
                    <Header navigation={navigation} HassideBars={true} />
                </View>

                <View style={s.main}>
                    <View style={s.acTxtO}>
                        <Text style={[s.acTxt, appcontext.buzzOn ? s.onTxt : null]}>{appcontext.buzzOn ? 'Buzzing if Off' : 'Activate to live Buzz free!'}</Text>
                    </View>

                    <View style={[s.mosDiv, appcontext.buzzOn ? s.activebtnBZ : null]}>
                        <View style={s.liner}>

                            {
                                appcontext.buzzOn ? (
                                    <>
                                        <Animated.View style={{height:moderateScale(70),transform:[{translateX:linerValue}],flexDirection:'row'}}>
                                                <Animated.Image
                                                    style={{width:'100%',height:moderateScale(70)}}
                                                    source={require('../assets/png/activebars.png')}
                                                />
                                                <Animated.Image
                                                    style={{width:'100%',height:moderateScale(70)}}
                                                    source={require('../assets/png/activebars.png')}
                                                />
                                                <Animated.Image
                                                    style={{width:'100%',height:moderateScale(70)}}
                                                    source={require('../assets/png/activebars.png')}
                                                />
                                                <Animated.Image
                                                    style={{width:'100%',height:moderateScale(70)}}
                                                    source={require('../assets/png/activebars.png')}
                                                />
                                        </Animated.View>
                                    </>
                                ) : (
                                    <>
                                        <Line width={'100%'} height={moderateScale(30)} />
                                    </>
                                )
                            }
                        </View>
                        <LinearGradient colors={appcontext.buzzOn ? ['#2B2E33', '#2B2E33'] : ['#E3FFFF', '#B4FFFF']} style={[s.ciecleMos, appcontext.buzzOn ? s.buzol : null]}>
                            <Animated.View style={{ position: 'absolute', top: moderateScale(10), left: moderateScale(5) }}>

                                {
                                    appcontext.buzzOn ? (
                                        <>
                                            <Animated.View style={{ transform: [{ translateY: MosD },{ translateX: MosDT }] }}>
                                                <Cmos height={moderateScale(120)} width={moderateScale(160)} />
                                            </Animated.View>
                                        </>
                                    ) : (
                                        <>
                                            <Animated.View >
                                                <Animated.Image
                                                    style={s.tinyLogo}
                                                    source={require('../assets/png/mosw.png')}
                                                />
                                                <Animated.Image
                                                    style={{ ...s.tinyLogo, opacity: valuo }}
                                                    source={require('../assets/png/mosR.png')}
                                                />
                                            </Animated.View>
                                        </>
                                    )
                                }
                            </Animated.View>
                        </LinearGradient>
                    </View>

                    <View style={[s.activebtn, appcontext.buzzOn ? s.activebtnBZo : null]}>
                        <TouchableOpacity style={[s.btn, appcontext.buzzOn ? s.btnOn : null]} onPress={async () => {
                            handleAnimation(appcontext.buzzOn)
                        }}>
                            <Animated.View style={{ ...animatedStyle }}>
                                <CurrentLogo />
                            </Animated.View>
                        </TouchableOpacity>
                        {
                            appcontext.buzzOn ? (
                                <>
                                    <Animated.View style={{ ...s.cLogo }}>
                                        <Animated.Image source={require('../assets/png/circle2.gif')} style={{ height: moderateScale(180), width: moderateScale(188), }} />
                                    </Animated.View>
                                </>
                            ) : (null)
                        }
                    </View>
                    <View style={s.dflex}>
                        <View style={s.acTxtO2}>
                            {
                                appcontext.buzzOn ? (
                                    <>
                                        <Animated.View style={{ transform: [{ translateX: linerValue2 }] , flexDirection:'row'}}>
                                            <Animated.Image
                                                style={{
                                                    height: moderateScale(20), width: moderateScale(250), resizeMode: 'repeat'
                                                }}
                                                source={require('../assets/png/activebars.png')}
                                            />
                                            <Animated.Image
                                                style={{
                                                    height: moderateScale(20), width: moderateScale(250), resizeMode: 'repeat'
                                                }}
                                                source={require('../assets/png/activebars.png')}
                                            />
                                            <Animated.Image
                                                style={{
                                                    height: moderateScale(20), width: moderateScale(250), resizeMode: 'repeat'
                                                }}
                                                source={require('../assets/png/activebars.png')}
                                            />
                                            <Animated.Image
                                                style={{
                                                    height: moderateScale(20), width: moderateScale(250), resizeMode: 'repeat'
                                                }}
                                                source={require('../assets/png/activebars.png')}
                                            />
                                            <Animated.Image
                                                style={{
                                                    height: moderateScale(20), width: moderateScale(250), resizeMode: 'repeat'
                                                }}
                                                source={require('../assets/png/activebars.png')}
                                            />
                                            <Animated.Image
                                                style={{
                                                    height: moderateScale(20), width: moderateScale(250), resizeMode: 'repeat'
                                                }}
                                                source={require('../assets/png/activebars.png')}
                                            />
                                            <Animated.Image
                                                style={{
                                                    height: moderateScale(20), width: moderateScale(250), resizeMode: 'repeat'
                                                }}
                                                source={require('../assets/png/activebars.png')}
                                            />
                                        </Animated.View>
                                    </>
                                ) : (
                                    <>
                                        <Line2 width={moderateScale(180)} height={moderateScale(20)} />
                                    </>
                                )
                            }
                            <Text style={[s.acTxt, s.mt0, appcontext.buzzOn ? s.onTxt : null]}>{appcontext.buzzOn ? 'Activated' : 'Deactivated'}</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default Home;