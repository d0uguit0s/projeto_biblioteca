import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/authentication/Login'

const AuthRoutes = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}

export default AuthRoutes;