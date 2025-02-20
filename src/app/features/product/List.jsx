


// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import OneItem from "./OneItem"; // Ensure the path is correct
// // import Cart from './app/order/Cart'; 
// const List = ({ arr, deleteFromArr }) => {
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleCartClick = () => {
//         navigate("/cart"); // Navigate to the Cart component
//     };

//     return (
//         <>
//             <button onClick={handleCartClick}>סל קניות שלך</button> {/* Button to navigate to Cart */}
//             {arr.length === 0 ? (
//                 <h1>No Product</h1>
//             ) : (
//                 <ul>
//                     {arr.map(item => (
//                         <li key={item._id}>
//                             <OneItem item={item} remove={deleteFromArr} />
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </>)}
//         export default List;

import { useNavigate } from "react-router-dom";
import OneItem from "./OneItem";

const List = ({ arr, deleteFromArr }) => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/cart");
    };

    return (
        <>
            <button onClick={handleCartClick}>סל קניות שלך</button>
            {arr.length === 0 ? (
                <h1>No Product</h1>
            ) : (
                <ul>
                    {arr.map(item => (
                        <li key={item._id}>
                            <OneItem item={item} remove={deleteFromArr} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default List;