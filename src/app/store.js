import { configureStore } from "@reduxjs/toolkit";
// import userSlice from './user/userSlice.js';
import OrderSlice from './features/order/OrderSlice.js';

export const store = configureStore({
    reducer: {
        // user: userSlice,
        order: OrderSlice
    }
});