'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface DarkModeState {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  darkMode: false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    storeDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const {storeDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;
