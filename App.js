import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Home from './src/Home/Home'
import Faq from './src/Faq/FaqScreen'
import AppContext from './src/Context/AppContext';
import DrawerContent from './src/Drawer/Drawer';

const Drawer = createDrawerNavigator();
const App = ({ navigation }) => {

  const [buzzOn, setbuzzOn] = useState(false)
  const userSettings = {
    buzzOn:buzzOn,
    setbuzzOn
  }

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Drawer.Navigator
        drawerBackgroundColor= {'black'}
        screenOptions={{
          drawerStyle: {
            drawerBackgroundColor: 'transparent',
            width: '70%',
            overflow: 'hidden',
          },
        }}
        initialRouteName="Root"
        drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen options={{headerShown:false}} name="Home" component={Home} />
          <Drawer.Screen options={{headerShown:false}} name="FAQ" component={Faq} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
