import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        loginSuccess: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }

    }
})

export const { toggleModal, setModal } = authSlice.actions
export default authSlice.reducer