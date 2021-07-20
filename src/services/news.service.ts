import ApiClient from '../ApiClient';

export const getNews = (complexId: number) =>
  ApiClient.get(`/news?complexId=${complexId}`);

export const getPost = (postId: number) => ApiClient.get(`/news/${postId}`);
