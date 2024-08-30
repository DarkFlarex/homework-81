import {createSlice} from "@reduxjs/toolkit";
import {createLink, } from "./LinksThunks";
import {LinkType} from "../../types";

export interface LinksState {
    isCreating: boolean;
    link: LinkType | null;
}

const initialState: LinksState = {
    isCreating: false,
    link: null,
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
            .addCase(createLink.fulfilled, (state, { payload:shortUrl}) => {
                state.link = shortUrl;
                state.isCreating = false;
            })
            .addCase(createLink.rejected, (state) => {
                state.isCreating = false;
            });
    },
    selectors: {
        selectLinkCreating: (state) => state.isCreating,
        selectLink: (state) => state.link,
    },
});

export const linksReducer = linksSlice.reducer;

export const {
    selectLinkCreating,
    selectLink,
} = linksSlice.selectors;