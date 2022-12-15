import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

type InputProps = {
  label: string;
  name: string;
  value?: string;
  keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
  touched?: boolean;
  errors?: string;
  onChangeText: (text: string) => void;
};

const TextInputComponent = ({
  label,
  value,
  keyboardType = 'default',
  touched,
  errors,
  onChangeText,
}: InputProps) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.textInputContent}>
        <TextInput
          maxLength={50}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
        />
      </View>
      {!!errors && touched && <Text style={styles.errorText}>{errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
  },
  label: {
    fontWeight: 'bold',
  },
  textInputContent: {
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'gray',
  },
  errorText: {
    color: 'red',
  },
});

export default TextInputComponent;
