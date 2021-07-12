import AsyncStorage from '@react-native-async-storage/async-storage';
import Client from '../ApiClient';

export const getToken = () => AsyncStorage.getItem('jwt_token');

export const setToken = (token: string) =>
  AsyncStorage.setItem('jwt_token', token);

export const removeToken = () => AsyncStorage.removeItem('access_token');

export const requestOTP = (phone: string): Promise<any> =>
  Client.post('/auth/otp', {phone});

export const verifyOTP = (phone: string, otp: string): Promise<any> =>
  Client.post('/auth/verify', {phone, otp});
