'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface HomeState {
  inView: boolean;
}

const initialState: HomeState = {
  inView: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    storeHomeMode: (state, action) => {
      state.inView = action.payload;
    },
  },
});

export const { storeHomeMode } = homeSlice.actions;
export default homeSlice.reducer;
