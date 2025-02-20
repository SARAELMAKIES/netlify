// // // import { createSlice } from "@reduxjs/toolkit";

// // // let initialState = {
// // //     basket: []
// // // };

// // // const orderSlice = createSlice({
// // //     name: "order",
// // //     initialState: initialState,
// // //     reducers: {
// // //         // // Add item to basket
// // //         // addItem: (state, action) => {
// // //         //     const existingItem = state.basket.find(item => item.id === action.payload.id);
// // //         //     if (existingItem) {
// // //         //         // If item already in basket, increase quantity
// // //         //         existingItem.quantity += action.payload.quantity;
// // //         //         console.log(action.payload)
// // //         //     } else {
// // //         //         // If item not in basket, add it
// // //         //         state.basket.push({ ...action.payload, quantity: action.payload.quantity });
// // //         //         console.log(action.payload)
// // //         //     }
// // //         // },


        
// // //         addItem: (state, action) => {
// // //             let index = state.arr.findIndex(item => item._id == action.payload._id);
            
// // //             if (index == -1) {

// // //                 let copy = { ...action.payload, qty: 1 };
// // //                 state.arr.push(copy);
// // //                 console.log("you are in");
// // //                 console.log(action.payload);
// // //             }
// // //             else{
// // //                 state.arr[index].qty++;
// // //                 console.log("you are in");
// // //                 console.log(state.arr[index].qty);
// // //                 console.log();


// // //              }      
// // //         },
// // //         // addItem: (state, action) => {
// // //         //     const existingItem = state.basket.find(item => item.id === action.payload.id);
// // //         //     if (existingItem) {
// // //         //         // אם הפריט כבר בסל, הגדל את הכמות
// // //         //         existingItem.quantity += action.payload.quantity;
// // //         //     } else {
// // //         //         // אם הפריט לא בסל, הוסף אותו עם כל המידע
// // //         //         state.basket.push({ 
// // //         //             id: action.payload.id, 
// // //         //             name: action.payload.name, 
// // //         //             price: action.payload.price, // הוסף את המחיר
// // //         //             quantity: action.payload.quantity 
// // //         //         });
// // //         //     }
// // //         // },
// // //         // Remove item from basket
// // //         removeItem: (state, action) => {
// // //             state.basket = state.basket.filter(item => item.id !== action.payload.id);
// // //         },
// // //         // Update item quantity in basket
// // //         updateQuantity: (state, action) => {
// // //             const item = state.basket.find(item => item.id === action.payload.id);
// // //             if (item) {
// // //                 item.quantity = action.payload.quantity; // Update to new quantity
// // //             }
// // //         }
// // //     }
// // // });

// // // // Export the actions
// // // export const { addItem, removeItem, updateQuantity } = orderSlice.actions;

// // // // Export the reducer to be used in the store
// // // export default orderSlice.reducer;
// // // // import { createSlice } from "@reduxjs/toolkit";

// // // // let initialState = {
// // // //     basket: []
// // // // };

// // // // const orderSlice = createSlice({
// // // //     name: "order",
// // // //     initialState: initialState,
// // // //     reducers: {
// // // //         // Add item to basket
// // // //         addItem: (state, action) => {
// // // //             const existingItem = state.basket.find(item => item.id === action.payload.id);
// // // //             if (existingItem) {
// // // //                 // If item already in basket, increase quantity
// // // //                 existingItem.quantity += action.payload.quantity;
// // // //             } else {
// // // //                 // If item not in basket, add it
// // // //                 state.basket.push({ ...action.payload, quantity: action.payload.quantity });
// // // //             }
// // // //         },
// // // //         // Remove item from basket
// // // //         removeItem: (state, action) => {
// // // //             state.basket = state.basket.filter(item => item.id !== action.payload.id);
// // // //         },
// // // //         // Update item quantity in basket
// // // //         updateQuantity: (state, action) => {
// // // //             const item = state.basket.find(item => item.id === action.payload.id);
// // // //             if (item) {
// // // //                 item.quantity = action.payload.quantity; // Update to new quantity
// // // //             }
// // // //         }
// // // //     }
// // // // });

// // // // // Export the actions
// // // // export const { addItem, removeItem, updateQuantity } = orderSlice.actions;

// // // // // Export the reducer to be used in the store

// // // // export default orderSlice.reducer;












// // import { createSlice } from "@reduxjs/toolkit";

// // let initialState = {
// //     basket: [] // כאן אתה מגדיר את ה-basket
// // };

// // const orderSlice = createSlice({
// //     name: "order",
// //     initialState: initialState,
// //     reducers: {
// //         // addItem: (state, action) => {
// //         //     let index = state.basket.findIndex(item => item._id === action.payload._id); // השתמש ב-basket במקום arr
            
// //         //     if (index === -1) {
// //         //         let copy = { ...action.payload, qty: 1 };
// //         //         state.basket.push(copy); // הוסף ל-basket
// //         //         console.log("you are in");
// //         //         console.log(action.payload);
// //         //     } else {
// //         //         state.basket[index].qty++;
// //         //         console.log("you are in");
// //         //         console.log(state.basket[index].qty);
// //         //     }      
// //         // },
// //         addItem: (state, action) => {
// //             const existingItem = state.basket.find(item => item._id === action.payload._id);
            
// //             if (existingItem) {
// //                 // אם הפריט כבר בסל, הגדל את הכמות
// //                 existingItem.qty++;
// //             } else {
// //                 // אם הפריט לא בסל, הוסף אותו עם כמות 1
// //                 state.basket.push({ ...action.payload, qty: 1 });
// //             }
// //         }
// // ,        
// //         removeItem: (state, action) => {
// //             state.basket = state.basket.filter(item => item._id !== action.payload._id); // השתמש ב-id הנכון
// //         },
// //         updateQuantity: (state, action) => {
// //             const item = state.basket.find(item => item._id === action.payload._id);
// //             if (item) {
// //                 item.qty = action.payload.qty; // עדכן את הכמות החדשה
// //             }
// //         }
// //     }
// // });

// // // Export the actions
// // export const { addItem, removeItem, updateQuantity } = orderSlice.actions;

// // // Ensure you have a default export for the reducer
// // export default orderSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// let initialState = {
//     basket: [] // כאן אתה מגדיר את ה-basket
// };

// const orderSlice = createSlice({
//     name: "order",
//     initialState: initialState,
//     reducers: {
//         addItem: (state, action) => {
//             const existingItem = state.basket.find(item => item._id === action.payload._id);
            
//             if (existingItem) {
//                 // אם הפריט כבר בסל, הגדל את הכמות
//                 existingItem.qty++;
//             } else {
//                 // אם הפריט לא בסל, הוסף אותו עם כמות 1
//                 state.basket.push({ ...action.payload, qty: 1 });
//             }
//         },
//         removeItem: (state, action) => {
//             state.basket = state.basket.filter(item => item._id !== action.payload._id); // השתמש ב-id הנכון
//         },
//         updateQuantity: (state, action) => {
//             const item = state.basket.find(item => item._id === action.payload._id);
//             if (item) {
//                 item.qty = action.payload.qty; // עדכן את הכמות החדשה
//             }
//         }
//     }
// });

// // Export the actions
// export const { addItem, removeItem, updateQuantity } = orderSlice.actions;

// // Ensure you have a default export for the reducer
// export default orderSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    basket: [] // כאן אתה מגדיר את ה-basket
};

const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.basket.find(item => item._id === action.payload._id);
            
            if (existingItem) {
                // אם הפריט כבר בסל, הגדל את הכמות
                existingItem.qty++;
            } else {
                // אם הפריט לא בסל, הוסף אותו עם כמות 1
                state.basket.push({ ...action.payload, qty: 1 });
            }
        },
        removeItem: (state, action) => {
            state.basket = state.basket.filter(item => item._id !== action.payload._id); // הסר את הפריט מהסל
        },
        updateQuantity: (state, action) => {
            const item = state.basket.find(item => item._id === action.payload._id);
            if (item) {
                // עדכן את הכמות החדשה, ודא שהיא לא שלילית
                item.qty = Math.max(action.payload.qty, 0);
            }
        }
    }
});

// Export the actions
export const { addItem, removeItem, updateQuantity } = orderSlice.actions;

// Ensure you have a default export for the reducer
export default orderSlice.reducer;