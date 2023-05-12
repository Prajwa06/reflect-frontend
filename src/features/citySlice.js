import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  city: null,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addCity: (state,action) => {
      state.value=action.payload;
    },
    removeCity: (state) => {
      state.value=null;
    },
   
  },
})


export const { addCity,removeCity } = citySlice.actions;


export const selectCity = (state) => state.city.value;



export default citySlice.reducer;