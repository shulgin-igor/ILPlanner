import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import appReducer from './appSlice';
import Reactotron from '../config/reactotron';

const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
  enhancers: [Reactotron.createEnhancer!()],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
