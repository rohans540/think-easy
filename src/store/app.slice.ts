import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { POSTS } from "../constants";

export const getAllPosts: any = createAsyncThunk(
    'app/getAllPosts',
    async () => {
        try {
            return await axios.get(POSTS)
        } catch(error) {
            console.log(error)
        }
    }
)


const appSlice = createSlice({
    name: 'app',
    initialState: {
        posts: [] as any,
        loading: false
    },
    reducers: {},
    extraReducers(builder: any) {
        builder
            .addCase(getAllPosts.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(getAllPosts.fulfilled, (state: any, action: any) => {
                console.log('accessToken is..', localStorage.getItem('accessToken'));
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
                console.log('get posts..', action);
                state.loading = false;
                state.posts = action.payload.data
            })
            .addCase(getAllPosts.rejected, (state: any) => {
                state.loading = false;
            })
    }
})

export default appSlice;