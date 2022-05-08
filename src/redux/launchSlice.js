import { createSlice } from "@reduxjs/toolkit";

const launchSlice = createSlice({
    name: 'counter',
    initialState: [],
    reducers: {
        loadData(state, action) {
            state.push(action.payload);
        },
        searchByRocket(state, action) {
            state.push(action.payload);
        }
    }
});

export const { loadData, searchByRocket } = launchSlice.actions;
export default launchSlice.reducer;