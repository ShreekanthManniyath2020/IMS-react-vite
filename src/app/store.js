import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sideBar/sidebarSlice"
import productReducer from "../features/products/productsSlice"

const store = configureStore({
    reducer: combineReducers({
        sidebar: sidebarReducer,
        products: productReducer
    })
});

export default store;