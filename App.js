import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconButton from './src/components/IconButton';
import Camera from './src/screens/Camera';
import Gallery from './src/screens/Gallery';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Camera"
      tabBarOptions={{
        activeTintColor: '#e95a0c',
      }}>
      <Tab.Screen name="Camera"
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color }) => (
            <Icon name="camera-alt" size={25} color={color} />
          ),
        }}
        component={Camera} />
      <Tab.Screen name="Gallery"
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color }) => (
            <Icon name="photo" size={25} color={color} />
          ),
        }} component={Gallery} />
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
