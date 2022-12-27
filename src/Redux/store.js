import { configureStore } from '@reduxjs/toolkit'
import switcherReducer  from './switcher'

export const store = configureStore({
    reducer: {
        counter: switcherReducer,
    }
});

