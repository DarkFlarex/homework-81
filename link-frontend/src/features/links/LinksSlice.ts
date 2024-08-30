import {createSlice} from "@reduxjs/toolkit";
import {createLink, } from "./LinksThunks";

export interface LinksState {
    isCreating: boolean;
}

const initialState: LinksState = {
    isCreating: false,
};

export const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createLink.pending, (state) => {
                state.isCreating = true;
            })
            .addCase(createLink.fulfilled, (state) => {
                state.isCreating = false;
            })
            .addCase(createLink.rejected, (state) => {
                state.isCreating = false;
            });
    },
    selectors: {
        selectLinkCreating: (state) => state.isCreating,
    },
});

export const linksReducer = linksSlice.reducer;

export const {
    selectLinkCreating,
} = linksSlice.selectors;