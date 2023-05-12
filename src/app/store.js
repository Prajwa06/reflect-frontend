import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import cityReducer from '../features/placeSlice';
import placeReducer from '../features/citySlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    city:cityReducer,
    place:placeReducer,
  },
});
