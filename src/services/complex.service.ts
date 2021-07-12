import ApiClient from '../ApiClient';

export const getComplexInfo = (complexId: number) =>
  ApiClient.get(`/complexes/${complexId}`);
