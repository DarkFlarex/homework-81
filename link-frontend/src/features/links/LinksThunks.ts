import {createAsyncThunk} from "@reduxjs/toolkit";
import { LinkMutation, LinkType} from "../../types";
import axiosApi from "../../axiosApi";

export const createLink = createAsyncThunk<LinkType, LinkMutation>(
    'links/create',
    async (linkMutation) => {
        const { data: link } = await axiosApi.post<LinkType>('/links', linkMutation);
        return link;
    }
);


