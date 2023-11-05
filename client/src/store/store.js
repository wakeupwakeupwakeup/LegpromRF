import {combineReducers, configureStore} from '@reduxjs/toolkit'
import navigationSlice from "@/src/store/navigation/navigation.slice";
import authModalSlice from "@/src/store/auth/authModal.slice"

const reducers = combineReducers({
    navigation: navigationSlice,
    authModal: authModalSlice
})

export const store = configureStore({
    reducer: reducers,
    devTools: true,
})
