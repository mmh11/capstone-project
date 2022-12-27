import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
}

export const switcherSlice  = createSlice({
    name: "switcher",
    initialState,
    reducers: {
        setTutorial: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setTutorial } = switcherSlice.actions
export default switcherSlice.reducer;