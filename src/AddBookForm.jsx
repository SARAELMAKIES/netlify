
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBookForm = ({ add }) => {
    let { register, handleSubmit } = useForm()

    const save = (data) => {
       
        axios.post("mongodb+srv://soul6787344:xZnXpbiCWixJmNJG@cluster0.qyvps.mongodb.net/serverkollleg?retryWrites=true&w=majority&appName=Cluster0", data)
            .then(result => {
                console.log(result)
                alert(" נוסף בהצלחה")
                add(result.data)
            }).catch(err => {
                alert("תקלה בהוספת \n" + err.message)
            })
    }
    return (<form className="add-form" onSubmit={handleSubmit(save)}>

        <label>שם</label>
        <input type="text" {...register("name")} />
        <label>סמפר חדרם</label>
        <input type="number" {...register("numRoom")} />
        <label>שתאריךתחילת קורס</label>
        <input type="date" {...register("publishDate")} />
        <label>שם פרטי מור</label>
        <input type="text" {...register("teacher.firstName")} />
        <label>שם משפחה מור</label>
        <input type="text" {...register("teacher.lastName")} />
        <label>שכתובת</label>
        <input type="text" {...register("teacher.address")} />
        <input type="submit" />
    </form>);
}

export default AddBookForm;
