import ApiClient from '../ApiClient';

export const getList = () => ApiClient.get('/apartments/list');
