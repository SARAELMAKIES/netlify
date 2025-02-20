
import { useForm } from "react-hook-form";

import axios from "axios";

const AddForm = ({ add }) => {
    const { register, handleSubmit } = useForm();

    const save = async (data) => {
        try {
            const response = await axios.post("http://localhost:4000/api/product", data); // Make sure this endpoint matches your backend
            console.log(response);
            alert("נוסף בהצלחה");
            add(response.data); // Assuming response.data contains the newly created product
        } catch (err) {
            alert("תקלה בהוספת מוצר\n" + err.message);
        }
    };

    return (
        <form className="add-form" onSubmit={handleSubmit(save)}>
            <label>שם מוצר</label>
            <input type="text" {...register("name")} required />

            <label>תיאור מוצר</label>
            <input type="text" {...register("description")} required />

            <label>מחיר של המוצר</label>
            <input type="number" {...register("price")} required />

            <label>תאריך</label>
            <input type="date" {...register("date")} required />

            <label>כתובת תמונה</label>
            <input type="text" {...register("img")} />

            <label>קטגוריה</label>
            <input type="text" {...register("category")} />

            <label>מרכיבים</label>
            <input type="text" {...register("ingredient")} placeholder="פרט מרכיבים, מופרדים בפסיקים" />

            <input type="submit" value="הוסף מוצר" />
        </form>
    );
};

export default AddForm;

// import { useForm } from "react-hook-form";
// import axios from "axios";

// const AddBookForm = ({ add }) => {
//     let { register, handleSubmit } = useForm()

//     const save = (data) => {
       
//         axios.post("mongodb+srv://soul6787344:xZnXpbiCWixJmNJG@cluster0.qyvps.mongodb.net/projectshop?retryWrites=true&w=majority&appName=Cluster0", data)
//             .then(result => {
//                 console.log(result)
//                 alert(" נוסף בהצלחה")
//                 add(result.data)
//             }).catch(err => {
//                 alert("תקלה בהוספת \n" + err.message)
//             })
//     }
//     return (<form className="add-form" onSubmit={handleSubmit(save)}>

//         <label>שם מוצר</label>
// <input type="text" {...register("name")} required />

// <label>תיאור מוצר</label>
// <input type="text" {...register("description")} required />

// <label>מחיר של המוצר</label>
// <input type="number" {...register("price")} required />

// <label>תאריך</label>
// <input type="date" {...register("date")} required />

// <label>כתובת תמונה</label>
// <input type="text" {...register("img")} />

// <label>קטגוריה</label>
// <input type="text" {...register("category")} />

// <label>מרכיבים</label>
// <input type="text" {...register("ingredient")} placeholder="פרט מרכיבים, מופרדים בפסיקים" />

//         <input type="submit" />
//     </form>);
// }

// export default AddBookForm;
