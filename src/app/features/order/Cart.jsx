// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, updateQuantity } from '../order/OrderSlice.js';
// import OneItem from "../product/OneItem";// Import OneItem component

// const Cart = () => {
//     const basket = useSelector((state) => state.order.basket);
//     const dispatch = useDispatch();

//     const handleRemove = (id) => {
//         dispatch(removeItem({ id }));
//     };

//     const handleQuantityChange = (id, newQuantity) => {
//         dispatch(updateQuantity({ id, quantity: newQuantity }));
//     };

//     const totalPrice = basket.reduce((total, item) => total + (item.price * item.quantity), 0); // Calculate total price

//     return (
//         <div>
//             <h1>סל קניות</h1>
//             {basket.length === 0 ? (
//                 <p>הסל שלך ריק</p>
//             ) : (
//                 basket.map(item => (
//                     <div key={item.id}>
//                         <OneItem item={item} /> {/* Display OneItem for each item in the cart */}
//                         <div>
//                             <button onClick={() => handleRemove(item.id)}>הסר</button>
//                             <input
//                                 type="number"
//                                 value={item.quantity}
//                                 onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
//                                 min="1" // Prevent setting quantity to less than 1
//                             />
//                         </div>
//                     </div>
//                 ))
//             )}
//             <h2>סכום כולל: {totalPrice}₪</h2> {/* Display total price */}
//         </div>
//     );
// };

// // export default Cart;









import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../order/OrderSlice.js';
import OneItem from "../product/OneItem";

const Cart = () => {
    const basket = useSelector((state) => state.order.basket);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem({ _id: id })); // השתמש ב-_id
    };

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return; // Prevent setting quantity to less than 1
        dispatch(updateQuantity({ _id: id, qty: newQuantity })); // השתמש ב-qty
    };

    const totalPrice = basket.reduce((total, item) => total + (item.price * item.qty), 0); // השתמש ב-qty

    return (
        <div>
            <h1>סל קניות</h1>
            {basket.length === 0 ? (
                <p>הסל שלך ריק</p>
            ) : (
                basket.map(item => (
                    <div key={item._id}>
                        <OneItem item={item} showAddToCart={false} /> {/* העבר false כדי לא להציג את הכפתור */}
                        <div>
                            <button onClick={() => handleRemove(item._id)}>הסר</button>
                            <input
                                type="number"
                                value={item.qty} // השתמש ב-qty
                                onChange={(e) => handleQuantityChange(item._id, Number(e.target.value))}
                                min="1"
                            />
                        </div>
                    </div>
                ))
            )}
            <h2>סכום כולל: {totalPrice}₪</h2>
        </div>
    );
};

export default Cart;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, updateQuantity } from '../order/OrderSlice.js';
// import OneItem from "../product/OneItem";

// const Cart = () => {
//     const basket = useSelector((state) => state.order.basket);
//     const dispatch = useDispatch();

//     const handleRemove = (id) => {
//         dispatch(removeItem({ id }));
//     };

//     const handleQuantityChange = (id, newQuantity) => {
//         if (newQuantity < 1) return; // Prevent setting quantity to less than 1
//         dispatch(updateQuantity({ id, quantity: newQuantity }));
//     };

//     const totalPrice = basket.reduce((total, item) => total + (item.price * item.quantity), 0);

//     return (
//         <div>
//             <h1>סל קניות</h1>
//             {basket.length === 0 ? (
//                 <p>הסל שלך ריק</p>
//             ) : (
//                 basket.map(item => (
//                     <div key={item._id}>
//                         <OneItem item={item} />
//                         <div>
//                             <button onClick={() => handleRemove(item._id)}>הסר</button>
//                             <input
//                                 type="number"
//                                 value={item.quantity}
//                                 onChange={(e) => handleQuantityChange(item._id, Number(e.target.value))}
//                                 min="1"
//                             />
//                         </div>
//                     </div>
//                 ))
//             )}
//             <h2>סכום כולל: {totalPrice}₪</h2>
//         </div>
//     );
// };

// export default Cart;