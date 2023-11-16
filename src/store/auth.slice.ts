import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH_SIGNUP, BASE_URL } from "../constants";

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
            return await axios.post(`${BASE_URL}/${AUTH_SIGNUP}`, request)
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
        signupSuccess: false,
        loading: false
    },
    reducers: {},
    extraReducers(builder: any) {
        builder
            .addCase(signupUser.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(signupUser.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.refreshToken = action.payload.data.refreshToken;
                localStorage.setItem('accessToken', action.payload.data.accessToken);
                state.signupSuccess = true
            })
            .addCase(signupUser.rejected, (state: any) => {
                state.loading = false;
                state.refreshToken = '';
                state.signupSuccess = false
            })
    }
})

export default authSlice;