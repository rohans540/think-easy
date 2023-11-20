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

export const createPost: any = createAsyncThunk(
    'app/createPost',
    async (request: any, { rejectWithValue }) => {
        try {
            return await axios.post(POSTS, request)
        } catch(error) {
            console.log(error);
            rejectWithValue(error?.response?.data)
        }
    }
)


const appSlice = createSlice({
    name: 'app',
    initialState: {
        posts: [] as any,
        loading: false,
        createSuccess: false
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
                state.loading = false;
                state.posts = action.payload.data
            })
            .addCase(getAllPosts.rejected, (state: any) => {
                state.loading = false;
            })
            .addCase(createPost.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.createSuccess = true;
            })
            .addCase(createPost.rejected, (state: any) => {
                state.loading = false;
            })
    }
})

export default appSlice;