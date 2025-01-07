import { useEffect } from "react";
import { useState } from "react";
// import Course from"Course"

const BookList = ({arr,deleteFromArr}) => {
   

    return (<>
        {arr.length == 0 ? status == "finish" ? <h1>no course</h1> : <p>loading...</p> : <ul>
            {arr.map(item => <li key={item._id}><Course remove={deleteFromArr} Course={item} /></li>)}
        </ul>}
    </>
    );

}

export default BookList;
