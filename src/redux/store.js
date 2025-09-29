import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/ProductSlice"

const store = configureStore({
    reducer: {
        Product: ProductReducer
    }
})

export default store;