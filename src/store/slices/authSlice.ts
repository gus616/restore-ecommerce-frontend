import { createSlice } from "@reduxjs/toolkit"
import type { User } from "../../models/User";

interface AuthState {
    user: null | User,
    token: string | null,
    loading: boolean,
    error: string | null
}


const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
});




export default authSlice.reducer;
