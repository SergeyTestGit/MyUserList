import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserList from '../screens/UsersList';
import UserInfo from '../screens/UserInfo';
import AddUserForm from '../screens/AddUserForm';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="AddUserForm" component={AddUserForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
