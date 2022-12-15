import React, {useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import uuid from 'react-uuid';
import {GET_USERS, REMOVE_USER} from '../../redux/reducer';
import UserCard from '../components/UserCard';
import {
  NavigationProps,
  UserReducerInitValueProps,
  UserInfoProps,
} from '../../types';

const UsersList = ({navigation}: NavigationProps) => {
  const users = useSelector((state: UserReducerInitValueProps) => state.users);
  const loading = useSelector(
    (state: UserReducerInitValueProps) => state.loading,
  );
  const errorMessage = useSelector(
    (state: UserReducerInitValueProps) => state.errorMessage,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_USERS,
      payload: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigate = (name: string, props?: object) => {
    navigation.navigate(name, props);
  };

  const renderGrid = ({item, index}: {item: UserInfoProps; index: number}) => {
    return (
      <UserCard
        image={item.image}
        title={item.company?.title || 'UnTitled'}
        onForwardInfo={() =>
          handleNavigate('UserInfo', {
            companyAddress: item.company?.address,
            image: item.image,
            firstName: item.firstName,
            lastName: item.lastName,
            age: item.age,
          })
        }
        onDelete={() =>
          dispatch({
            type: REMOVE_USER,
            payload: index,
          })
        }
      />
    );
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (errorMessage) {
    return <Text>{errorMessage}</Text>;
  }

  // use components in the future
  return (
    <View style={styles.wrapper}>
      {users?.length ? (
        <View style={styles.userList}>
          <FlatList
            data={users}
            renderItem={renderGrid}
            keyExtractor={uuid}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <Text>No data</Text>
      )}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => handleNavigate('AddUserForm')}>
        <Text style={styles.addBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 1,
  },
  userList: {
    height: '90%',
    paddingBottom: 32,
  },
  addBtn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: 'orange',
    borderRadius: 32,
  },
  addBtnText: {
    width: '100%',
    textAlign: 'center',
  },
});

export default UsersList;
