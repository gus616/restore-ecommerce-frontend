import { configureStore } from "@reduxjs/toolkit";
import {useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../features/api/catalogApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        [catalogApi.reducerPath] : catalogApi.reducer,
        cart: cartReducer
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(catalogApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();


setupListeners(store.dispatch);