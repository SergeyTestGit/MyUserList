import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

type UserInfoProps = {
  title: string;
  image?: string;
  onForwardInfo: (event: GestureResponderEvent) => void;
  onDelete: (event: GestureResponderEvent) => void;
};

const UserInfo = ({title, image, onForwardInfo, onDelete}: UserInfoProps) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.content} onPress={onForwardInfo}>
        <Image
          style={styles.img}
          source={{
            uri: image || 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.crossWrapper} onPress={onDelete}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '50%',
    height: 150,
    borderRadius: 8,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    opacity: 0.4,
  },
  text: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  crossWrapper: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
});

export default UserInfo;
