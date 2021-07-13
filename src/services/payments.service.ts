import ApiClient from '../ApiClient';

export const getList = (apartmentId: number) =>
  ApiClient.get(`/payments/${apartmentId}`);
