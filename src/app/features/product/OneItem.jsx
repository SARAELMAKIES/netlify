
// // import { useDispatch } from "react-redux";
// // import { addItem } from "../order/OrderSlice"; // Ensure the path is correct

// // const OneItem = ({ item }) => {
// //     const dispatch = useDispatch();

// //     const handleAddToCart = () => {
// //         dispatch(addItem({
// //             id: item.id,
// //             name: item.name,
// //             price: item.price,
// //             quantity: 1 // This can be changed for dynamic quantity
// //         }));
// //         alert(`המוצר ${item.name} נוסף לסל בהצלחה!`);
// //     };

// //     return (
// //         <div className="product-container">
// //          <img src={`../src/assets/${item.img}`} className="product-image" />   
// //             {/* <img src={item.image} alt={item.name} className="product-image" /> */}
// //             <h2>{item.name}</h2>
// //             <p>{item.description}</p>
// //             <p>מחיר: {item.price}₪</p>
// //             <p>בדיקה{item._id}</p>
// //             <button onClick={handleAddToCart}>
// //                 הוסף לסל 🛒
// //             </button>
// //         </div>
// //     );
// // };

// // export default OneItem;
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addItem } from "../order/OrderSlice"; // Ensure the path is correct
// import { Card, CardContent, CardMedia, Typography, Button, Modal } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close'; // Import Close icon

// const OneItem = ({ item }) => {
//     const dispatch = useDispatch();
//     const [modalOpen, setModalOpen] = useState(false);

//     const handleAddToCart = () => {
//         dispatch(addItem({
//             id: item.id,
//             name: item.name,
//             price: item.price,
//             quantity: 1 // This can be changed for dynamic quantity
//         }));
//         alert(`המוצר ${item.name} נוסף לסל בהצלחה!`);
//     };

//     const toggleModal = () => {
//         setModalOpen(!modalOpen);
//     };

//     return (
//         <div>
//             <Card className="product-container" onClick={toggleModal}>
//                 <CardMedia
//                     component="img"
//                     image={`../src/assets/${item.img}`} // Ensure the path is correct
//                     alt={item.name}
//                     className="product-image"
//                 />
//                 <CardContent>
//                     <Typography variant="h5">{item.name}</Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         מחיר: {item.price}₪
//                     </Typography>
//                     <Button onClick={handleAddToCart}>
//                         הוסף לסל 🛒
//                     </Button>
//                 </CardContent>
//             </Card>

//             <Modal
//                 open={modalOpen}
//                 onClose={toggleModal}
//                 aria-labelledby="modal-title"
//                 aria-describedby="modal-description"
//             >
//                 <div style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     height: '100%',
//                     backgroundColor: 'white',
//                     padding: '20px',
//                     outline: 'none',
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                     borderRadius: '8px',
//                     width: '400px', // Adjust width as needed
//                     position: 'relative' // Add relative positioning for the close button
//                 }}>
//                     <Button 
//                         onClick={toggleModal} 
//                         style={{ position: 'absolute', top: '10px', right: '10px' }}
//                     >
//                         <CloseIcon />
//                     </Button>
//                     <h2 id="modal-title">{item.name}</h2>
//                     <img src={`../src/assets/${item.img}`} alt={item.name} style={{ width: '100%' }} />
//                     <p id="modal-description">{item.description}</p>
//                     <Button onClick={toggleModal}>סגור</Button>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default OneItem;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../order/OrderSlice"; // Ensure the path is correct
import { Card, CardContent, CardMedia, Typography, Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import Close icon

const OneItem = ({ item }) => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    const handleAddToCart = (event) => {
        event.stopPropagation(); // Prevent the modal from opening
        dispatch(addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1 // This can be changed for dynamic quantity
        }));
        alert(`המוצר ${item.name} נוסף לסל בהצלחה!`);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div>
            <Card className="product-container" onClick={toggleModal}>
                <CardMedia
                    component="img"
                    image={`../src/assets/${item.img}`} // Ensure the path is correct
                    alt={item.name}
                    className="product-image"
                />
                <CardContent>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        מחיר: {item.price}₪
                    </Typography>
                    <Button onClick={handleAddToCart}>
                        הוסף לסל 🛒
                    </Button>
                </CardContent>
            </Card>

            <Modal
                open={modalOpen}
                onClose={toggleModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    backgroundColor: 'white',
                    padding: '20px',
                    outline: 'none',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                    width: '400px', // Adjust width as needed
                    position: 'relative' // Add relative positioning for the close button
                }}>
                    <Button 
                        onClick={toggleModal} 
                        style={{ position: 'absolute', top: '10px', right: '10px' }}
                    >
                        <CloseIcon />
                    </Button>
                    <h2 id="modal-title">{item.name}</h2>
                    <img src={`../src/assets/${item.img}`} alt={item.name} style={{ width: '100%' }} />
                    <p id="modal-description">{item.description}</p>
                    <Typography variant="body1">{item.ingredient}</Typography>
                    <Typography variant="body1">{item.category}</Typography>
                    <Typography variant="body1">{item.date}</Typography>
                    <Typography variant="body2">{item.additionalDetails}</Typography>
                    <Button onClick={toggleModal}>סגור</Button>
                </div>
            </Modal>
        </div>
    );
};

export default OneItem;