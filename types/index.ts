import {NavigationProp} from '@react-navigation/native';

export interface NavigationProps {
  navigation: NavigationProp<any, any>;
  route: any;
}

export type UserInfoProps = {
  firstName: string;
  lastName: string;
  image?: string;
  age?: number;
  company: {
    title: string;
    age: number;
    address: string;
    postalCode: string;
    state: string;
  };
};

export type UserReducerInitValueProps = {
  users: Array<UserInfoProps>;
  loading: boolean;
  errorMessage: string;
};
