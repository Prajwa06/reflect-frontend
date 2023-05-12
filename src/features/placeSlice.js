import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  place: null,
};

export const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    addPlace: (state,action) => {
      state.value=action.payload;
    },
    removePlace: (state) => {
      state.value=null;
    },
   
  },
})


export const { addPlace,removePlace } = placeSlice.actions;


export const selectPlace = (state) => state.place.value;



export default placeSlice.reducer;




