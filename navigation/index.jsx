import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Season1 from '../screens/season1';
import MainPage from '../screens/mainPage';
import MoreEpisodeSeries from '../screens/moreEpisodeSeries';
import React from 'react';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="mainPage" component={MainPage} 
        options={{
        headerShown: false,
        headerBackTitle:false
      }}/>
      <Stack.Screen name="axsTv" component={Home} 
      options={{
        headerShown: true,
      }}
      />
       <Stack.Screen name="season1" component={Season1}  options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="moreEpisode" component={MoreEpisodeSeries}  options={{
        headerShown: false,
      }} /> 
    </Stack.Navigator>
  );
}


export default MyStack;