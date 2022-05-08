import { createSlice } from "@reduxjs/toolkit";

const rocketSlice = createSlice({
    name: 'counter',
    initialState: [],
    reducers: {
        searchByRocket(state, action) {
            state.push(action.payload);
        }
    }
});

export const { searchByRocket } = rocketSlice.actions;
export default rocketSlice.reducer;