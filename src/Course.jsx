import axios from "axios";

const Course = ({ course ,remove}) => {
    return (<div>
        <h2>{course.name}</h2>
        <h3>{course.numRoom}</h3>
       
        <input type="button" value="🗑️" onClick={() => {
         
                axios.delete(`mongodb+srv://soul6787344:xZnXpbiCWixJmNJG@cluster0.qyvps.mongodb.net/serverkollleg?retryWrites=true&w=majority&appName=Cluster0${course.name}`)
                .then(result => {
                    console.log(result)
                    alert("פריט " + result.data.name + " נמחק בהצלחה")
                    remove(course._id)
                }).catch(err => {
                    alert("תקלה במחיקת קוסר\n" + err.message)
                    console.log(err)
                })
        }} />
    </div>);
}

export default Course;
