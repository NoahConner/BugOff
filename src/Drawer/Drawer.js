import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { moderateScale } from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/FontAwesome5';

const DrawerContent = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingBottom: 0, backgroundColor: '#1A1A1A' }}>
            <DrawerContentScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'flex-end', paddingRight: moderateScale(15), paddingTop: moderateScale(10) }}>
                    <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                        <Icon name="times" size={moderateScale(24)} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={{paddingHorizontal:moderateScale(20),marginTop:moderateScale(70)}}>
                    <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
                        <View>
                            <Text style={{fontFamily:'Poppins-Medium',color:'#fff',fontSize:moderateScale(34)}}>Quick Help</Text>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity style={{marginTop:moderateScale(20)}} >
                        <View>
                            <Text style={{fontFamily:'Poppins-Medium',color:'#fff',fontSize:moderateScale(34)}}>FeedBack</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}


export default DrawerContent;