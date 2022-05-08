import { configureStore } from '@reduxjs/toolkit'
import launchSlice from './launchSlice'
import rocketSlice from './rocketSlice'

export const store = configureStore({
  reducer: {
    launch: launchSlice,
    searchRocket: rocketSlice
  },
})