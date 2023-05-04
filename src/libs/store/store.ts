'use client'

import {configureStore} from '@reduxjs/toolkit'
import darkModeReducer from './features/darkModeSlice'
import homeReducer from  './features/homeSlice'

export const store = configureStore({
  reducer:{
    darkModeData: darkModeReducer,
    homeData:homeReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch