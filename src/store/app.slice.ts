import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { POSTS, POSTS_BY_USER } from "../constants";

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

export const getPostById: any = createAsyncThunk(
    'app/getPostById',
    async (id: string) => {
        try {
            return await axios.get(`${POSTS}/${id}`)
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

export const getPostByUserId: any = createAsyncThunk(
    'app/getPostByUserId',
    async (userId: string, { rejectWithValue }) => {
        try {
            return await axios.get(POSTS_BY_USER(userId))
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
        currentPost: {},
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
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
                state.loading = false;
                state.posts = action.payload.data
            })
            .addCase(getAllPosts.rejected, (state: any) => {
                state.loading = false;
            })

            .addCase(getPostById.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(getPostById.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.currentPost = action.payload.data
            })
            .addCase(getPostById.rejected, (state: any) => {
                state.loading = false
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

            .addCase(getPostByUserId.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(getPostByUserId.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.posts = action.payload.data;
            })
            .addCase(getPostByUserId.rejected, (state: any) => {
                state.loading = false;
            })
    }
})

export default appSlice;