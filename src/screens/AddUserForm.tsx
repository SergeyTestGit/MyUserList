import React from 'react';
import {View, ScrollView, Button, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {ADD_USER} from '../../redux/reducer';
import Input from '../components/Input';
import {NavigationProps} from '../../types';

type FormProps = {
  firstName: string;
  lastName: string;
  title: string;
  age: number | string;
  address: string;
  postalCode: string;
  state: string;
};

const AddUserForm = ({navigation}: NavigationProps) => {
  const dispatch = useDispatch();
  const stringTypeRequired = 'String type is reuired';
  const numberTypeRequired = 'Number type is reuired';
  const initialValues: FormProps = {
    firstName: '',
    lastName: '',
    title: '',
    age: '',
    address: '',
    postalCode: '',
    state: '',
  };

  const handleNavBack = () => {
    navigation.goBack();
  };

  const handleYupRequired = (name: string) => {
    return `${name} is required`;
  };

  function validationSchema() {
    return yup.object().shape({
      firstName: yup
        .string()
        .required(() => handleYupRequired('firstName'))
        .typeError(stringTypeRequired),
      lastName: yup
        .string()
        .required(() => handleYupRequired('lastName'))
        .typeError(stringTypeRequired),
      title: yup
        .string()
        .required(() => handleYupRequired('title'))
        .typeError(stringTypeRequired),
      age: yup
        .number()
        .required(() => handleYupRequired('age'))
        .typeError(numberTypeRequired),
      address: yup
        .string()
        .required(() => handleYupRequired('address'))
        .typeError(stringTypeRequired),
      postalCode: yup
        .string()
        .required(() => handleYupRequired('postalCode'))
        .typeError(stringTypeRequired),
      state: yup
        .string()
        .required(() => handleYupRequired('state'))
        .typeError(stringTypeRequired),
    });
  }

  const onSubmit = ({
    firstName,
    lastName,
    title,
    age,
    address,
    postalCode,
    state,
  }: FormProps) => {
    dispatch({
      type: ADD_USER,
      payload: {
        firstName,
        lastName,
        age,
        company: {
          title,
          address: {
            address,
            postalCode,
            state,
          },
        },
      },
    });
    handleNavBack();
  };

  return (
    <View>
      <Button onPress={handleNavBack} title="Go back" color="red" />
      <Formik
        validateOnMount={true}
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}>
        {({setFieldValue, handleSubmit, values, errors, touched}) => (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scrollview}>
              <Input
                label={'firstName'}
                name="firstName"
                onChangeText={e => setFieldValue('firstName', e)}
                value={values.firstName}
                keyboardType="default"
                touched={touched.firstName}
                errors={errors.firstName}
              />
              <Input
                label={'lastName'}
                name="lastName"
                onChangeText={e => setFieldValue('lastName', e)}
                value={values.lastName}
                keyboardType="default"
                touched={touched.lastName}
                errors={errors.lastName}
              />
              <Input
                label={'title'}
                name="title"
                onChangeText={e => setFieldValue('title', e)}
                value={values.title}
                keyboardType="default"
                touched={touched.title}
                errors={errors.title}
              />
              <Input
                label={'age'}
                name="age"
                onChangeText={e => setFieldValue('age', e)}
                value={values.age?.toString()}
                keyboardType="decimal-pad"
                touched={touched.age}
                errors={errors.age}
              />
              <Input
                label={'address'}
                name="address"
                onChangeText={e => setFieldValue('address', e)}
                value={values.address}
                keyboardType="default"
                touched={touched.address}
                errors={errors.address}
              />
              <Input
                label={'postalCode'}
                name="postalCode"
                onChangeText={e => setFieldValue('postalCode', e)}
                value={values.postalCode}
                keyboardType="decimal-pad"
                touched={touched.postalCode}
                errors={errors.postalCode}
              />
              <Input
                label={'state'}
                name="state"
                onChangeText={e => setFieldValue('state', e)}
                value={values.state}
                keyboardType="default"
                touched={touched.state}
                errors={errors.state}
              />
            </ScrollView>
            <Button onPress={handleSubmit} title={'Add'} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    height: '90%',
  },
});

export default AddUserForm;
