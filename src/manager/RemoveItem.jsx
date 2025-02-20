import axios from "axios";

const OneItem = ({ item, remove }) => {
    if (!item) {
        return <div>Item not found</div>; // or return null
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <input 
                type="button" 
                value="🗑️" 
                onClick={() => {
                    axios.delete(`http://localhost:4000/api/product/${item._id}`)
                    .then(result => {
                        console.log(result);
                        alert(`פריט ${item.name} נמחק בהצלחה`);
                        remove(item._id);
                    }).catch(err => {
                        alert("תקלה במחיקת מוצר\n" + err.message);
                        console.log(err);
                    });
                }} 
            />
        </div>
    );
}

export default OneItem;