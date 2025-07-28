import { createSlice , type PayloadAction} from "@reduxjs/toolkit"
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
    reducers: {
        setCredentials (state: AuthState, action: PayloadAction<{User: User, token: string}>) {
             const { User: user, token } = action.payload;
             const { email, phoneNumber, userName } = user;
             state.user = {
                userName,
                email,
                phoneNumber
             };
             state.token = token;
        },
        logout (state) {
            state.user = null;
            state.token = null;
        }
    }
});

export const {
    setCredentials,
    logout
} = authSlice.actions;


export default authSlice.reducer;
