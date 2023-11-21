import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH_LOGIN, AUTH_SIGNUP } from "../constants";

interface signUpProps {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async (request: signUpProps, { rejectWithValue }) => {
        try {
            return await axios.post(`${AUTH_SIGNUP}`, request)
        } catch(error) {
            console.log(error);
            rejectWithValue(error?.response?.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (request: any, { rejectWithValue }) => {
        try {
            return await axios.post(`${AUTH_LOGIN}`, request)
        } catch(error) {
            console.log(error);
            rejectWithValue(error?.response?.data)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        refreshToken: '',
        authSuccess: false,
        loading: false
    },
    reducers: {
        logout: (state: any) => {
            state.user = null;
            state.authSuccess = false;
            localStorage.clear();
        }
    },
    extraReducers(builder: any) {
        builder
            .addCase(signupUser.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(signupUser.fulfilled, (state: any, action: any) => {
                state.loading = false;
                localStorage.setItem('refreshToken', action.payload.data.refreshToken);
                localStorage.setItem('accessToken', action.payload.data.accessToken);
                axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.data.accessToken}`
                state.authSuccess = true
            })
            .addCase(signupUser.rejected, (state: any) => {
                state.loading = false;
                state.refreshToken = '';
                state.authSuccess = false
            })
            .addCase(loginUser.pending, (state: any) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state: any, action: any) => {
                state.loading = false;
                localStorage.setItem('refreshToken', action.payload.data.refreshToken);
                localStorage.setItem('accessToken', action.payload.data.accessToken);
                axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.data.accessToken}`
                localStorage.setItem('user', JSON.stringify(action.payload.data.user))
                state.authSuccess = true
            })
    }
})

export const { logout } = authSlice.actions;

export default authSlice;