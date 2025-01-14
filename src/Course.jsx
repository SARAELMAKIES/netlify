import axios from "axios";


const Course = ({ course, remove }) => {
    return (
        <div>
            <h2>{course.name}</h2>
            <h3>{course.price}</h3>
            <input 
                type="button" 
                value="🗑️" 
                onClick={() => {
                    axios.delete(`http://localhost:4000/api/product/${course._id}`)
                    .then(result => {
                        console.log(result);
                        alert(`פריט ${course.name} נמחק בהצלחה`);
                        remove(course._id);
                    }).catch(err => {
                        alert("תקלה במחיקת מוצר\n" + err.message);
                        console.log(err);
                    });
                }} 
            />
        </div>
    );
}

export default Course;


// const Course = ({ course ,remove}) => {
//     return (<div>
//         <h2>{course.name}</h2>
//         <h3>{course.price}</h3>
       
//         <input type="button" value="🗑️" onClick={() => {
         
//                 axios.delete(`http://localhost:4000/api/product/${course._id}${course.name}`)
//                 .then(result => {
//                     console.log(result)
//                     alert("פריט " + result.data.name + " נמחק בהצלחה")
//                     remove(course._id)
//                 }).catch(err => {
//                     alert("תקלה במחיקת קוסר\n" + err.message)
//                     console.log(err)
//                 })
//         }} />
//     </div>);
// }

// export default Course;
