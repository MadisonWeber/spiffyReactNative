/* eslint-disable */
import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Header from './components/Header'
import Review from './pages/Review'
import { Home as HomeIcon, Folder, ShoppingBag, User } from 'react-native-feather';
import Explore from './pages/Explore'
import Profile from './pages/Profile';

import Home from './pages/Home';

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: (props => <Header {...props} />),
          tabBarActiveTintColor: '#dbba00',
          tabBarInactiveTintColor: 'slategrey',
          activeTintColor: '#f5d000',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({color}) => <HomeIcon height={22} width={22} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Review"
          component={Review}
          options={{
            tabBarIcon: ({color}) => <Folder height={22} width={22} color={color} />
          }}
        />
        <Tab.Screen 
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({color}) => <ShoppingBag height={22} width={22} color={color} />
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => <User height={22} width={22} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}



export default App

