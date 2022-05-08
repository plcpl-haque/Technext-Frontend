import { createSlice } from "@reduxjs/toolkit";

const launchSlice = createSlice({
    name: 'counter',
    initialState: [],
    reducers: {
        loadData(state, action) {
            if (state.indexOf(action.payload) === -1) {
                state.push(action.payload)
            }
        },
        searchByRocket(state, action) {
            if (state.indexOf(action.payload) === -1) {
                state.push(action.payload);
            }
        }
    }
});

export const { loadData, searchByRocket } = launchSlice.actions;
export default launchSlice.reducer;