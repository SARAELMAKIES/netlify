// import { useEffect } from "react";
// import { useState } from "react";
// // import Course from"Course"

// const BookList = ({arr,deleteFromArr}) => {
   

//     return (<>
//         {arr.length == 0 ? status == "finish" ? <h1>no product</h1> : <p>loading...</p> : <ul>
//             {arr.map(item => <li key={item._id}><Course remove={deleteFromArr} Course={item} /></li>)}
//         </ul>}
//     </>
//     );

// }

// export default BookList;

import { useEffect } from "react";

import { useState } from "react";
import Course from "./Course"; // Ensure the path is correct

const BookList = ({ arr, deleteFromArr }) => {

    return (
        <>
            {arr.length === 0 ? (
                <h1>No Product</h1>
            ) : (
                <ul>
                    {arr.map(item => (
                        <li key={item._id}>
                            <Course course={item} remove={deleteFromArr} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};



export default BookList;