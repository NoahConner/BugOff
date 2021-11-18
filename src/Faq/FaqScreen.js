import React, { useContext } from 'react';
import s from './FaqStyle';
import {
    SafeAreaView,
    Text,
    View,
    Image
} from 'react-native';
import AppContext from '../Context/AppContext';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Header/Header';

const cardsItems = [
    {
        id: '1',
        icon: require('../assets/png/cardIcon1-8.png'),
        cardText: 'Fixed Frequency 20KHZ'
    },
    {
        id: '2',
        icon: require('../assets/png//cardIcon2-8.png'),
        cardText: 'One Click to Start'
    },
    {
        id: '4',
        icon: require('../assets/png//cardIcon4-8.png'),
        cardText: 'Incoming call automatically stop Ultrasonic Repller'
    },
]
const Faq = ({ navigation }) => {
    const appcontext = useContext(AppContext)
    return (
        <SafeAreaView style={s.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={appcontext.buzzOn ? ['#1E2024', '#1E2024'] : ['#E6FFFF', '#E3FFFF']} style={s.linearGradient}>
                <View >
                    <Header navigation={navigation} HassideBars={false} />
                </View>
                <View style={s.cardContainer1}>
                    {cardsItems.map((item) => (
                        <View key={item.id} style={s.cardContainer}>
                            <View style={s.cardIconBox}>
                                <Image style={s.cardIcon} source={item.icon} />
                            </View>
                            <View style={s.cardContent}>
                                <Text style={s.cardtext}>
                                    {item.cardText}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </LinearGradient>
        </SafeAreaView>
    )

}

export default Faq;