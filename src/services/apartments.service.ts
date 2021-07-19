import ApiClient from '../ApiClient';

export const getList = () => ApiClient.get('/apartments');

export const getApartment = (id: number) => ApiClient.get(`/apartments/${id}`);
