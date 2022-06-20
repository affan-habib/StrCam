import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomButton from './src/components/CustomButton';
import Camera from './src/screens/Camera';

function Gallery({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <CustomButton
        title="Camera"
        color='#0080ff'
        onPressFunction={() => { navigation.navigate('Camera') }}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Gallery" component={Gallery} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
