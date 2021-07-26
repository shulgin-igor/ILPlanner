import feed from '../mocks/feed';
export const getFeed = (apartmetId): Promise<any> =>
  Promise.resolve({data: feed});
