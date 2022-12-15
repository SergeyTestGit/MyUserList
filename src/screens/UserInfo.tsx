import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {NavigationProps} from '../../types';

const UserInfo = ({route, navigation}: NavigationProps) => {
  const {companyAddress, image, firstName, lastName, age} = route.params;
  const address = companyAddress?.address;
  const postalCode = companyAddress?.postalCode;
  const state = companyAddress?.state;

  const handleNavBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Button onPress={handleNavBack} title="Go back" color="red" />
      <Image
        style={styles.img}
        source={{
          uri: image || 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>firstName: {firstName}</Text>
      <Text>lastName: {lastName}</Text>
      <Text>age: {age}</Text>
      <Text style={styles.title}>Company</Text>
      <Text>address: {address}</Text>
      <Text>postal code: {postalCode}</Text>
      <Text>state: {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 16,
  },
});

export default UserInfo;
