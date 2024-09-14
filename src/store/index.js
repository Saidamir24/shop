import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/store/products/productsSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice
    }
})