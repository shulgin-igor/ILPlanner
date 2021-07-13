import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSettings = () =>
  AsyncStorage.multiGet(['settings:notificationDuration']).then(items =>
    items.reduce((acc: any, item: any) => {
      acc[item[0].split(':')[1]] = item[1];
      return acc;
    }, {}),
  );
