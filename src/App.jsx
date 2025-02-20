// import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import List from './app/features/product/List'
// import AddForm from './AddForm'
// import axios from "axios";
// import { Details } from './app/features/product/Details'
// function App() {

//   let [arr, setArr] = useState([])
//   let [status, setStatus] = useState("init")
//   const deleteFromArr = (id) => {
//     setArr(arr.filter(item => item._id  != id))
//   }
//   const addToArr = (newCourse) => {
//     setArr([...arr, newCourse])
//   }
//   useEffect(() => {
//     setStatus("pending")
//     axios.get(" http://localhost:4000/api/product").then(response => {
//       console.log(response);
//       setArr(response.data)
//     }).catch(err => {
//       console.log(err);
//       alert("מצטערים אי אפשר להביא את מוצרים" + err.message)
//     }).finally(() => {
//       setStatus("finish")
//     })
//   }, [])
//   return (
//     <>
//     <Details/>
//       <AddForm  add={addToArr}/>
//       <List arr={arr} deleteFromArr={deleteFromArr}/>
//     </>
//   )
// }

// // return (
// //   <>
// //     <Routes>
// //       <Route path="/list" element={<List arr={arr} deleteFromArr={deleteFromArr} />}>
// //         <Route path="/manager" element={<AddForm add={addToArr} />} />
// //       </Route>
// //     </Routes>
// //   </>
// // )}
// export default App;





//20:05

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import List from './app/features/product/List';
import AddForm from './manager/AddForm';
import Cart from './app/features/order/Cart'; // Import the Cart component
import axios from "axios";

function App() {
  const [arr, setArr] = useState([]);
  const [status, setStatus] = useState("init");
  const [error, setError] = useState(null);

  const deleteFromArr = (id) => {
    setArr(arr.filter(item => item._id !== id));
  };

  const addToArr = (newCourse) => {
    setArr(prevArr => [...prevArr, newCourse]);
  };

  useEffect(() => {
    let isMounted = true; // flag to track component mount status
    setStatus("pending");
    axios.get("http://localhost:4000/api/product")
      .then(response => {
        if (isMounted) {
          setArr(response.data);
          setStatus("finish");
        }
      })
      .catch(err => {
        if (isMounted) {
          console.error(err);
          setError("מצטערים, אי אפשר להביא את המוצרים: " + err.message);
          setStatus("finish");
        }
      });

    return () => {
      isMounted = false; // cleanup function to set flag
    };
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/add" element={<AddForm add={addToArr} />} />
          <Route path="/cart" element={<Cart />} /> {/* Add this line for the Cart route */}
          <Route path="/" element={
            status === "pending" ? (
              <div>Loading...</div>
            ) : (
              <>
                {error && <div>{error}</div>}
                <List arr={arr} deleteFromArr={deleteFromArr} />
              </>
            )
          } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;












//20:02

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { Provider } from "react-redux";
// import { store } from "./app/store.js";
// import List from './app/features/product/List';
// import AddForm from './manager/AddForm';
// import axios from "axios";

// function App() {
//   const [arr, setArr] = useState([]);
//   const [status, setStatus] = useState("init");
//   const [error, setError] = useState(null);

//   const deleteFromArr = (id) => {
//     setArr(arr.filter(item => item._id !== id));
//   };

//   const addToArr = (newCourse) => {
//     setArr(prevArr => [...prevArr, newCourse]);
//   };

//   useEffect(() => {
//     let isMounted = true; // flag to track component mount status
//     setStatus("pending");
//     axios.get("http://localhost:4000/api/product")
//       .then(response => {
//         if (isMounted) {
//           setArr(response.data);
//           setStatus("finish");
//         }
//       })
//       .catch(err => {
//         if (isMounted) {
//           console.error(err);
//           setError("מצטערים, אי אפשר להביא את המוצרים: " + err.message);
//           setStatus("finish");
//         }
//       });

//     return () => {
//       isMounted = false; // cleanup function to set flag
//     };
//   }, []);

//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/add" element={<AddForm add={addToArr} />} />
//           <Route path="/" element={
//             status === "pending" ? (
//               <div>Loading...</div>
//             ) : (
//               <>
//                 {error && <div>{error}</div>}
//                 <List arr={arr} deleteFromArr={deleteFromArr} />
//               </>
//             )
//           } />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { Provider } from "react-redux"; // 👈 הוסף את ה-Provider
// import { store } from "./app/store.js"; // 👈 ודא שהנתיב נכון
// import List from './app/features/product/List';
// import AddForm from './manager/AddForm';
// import axios from "axios";

// function App() {
//   let [arr, setArr] = useState([]);
//   let [status, setStatus] = useState("init");

//   const deleteFromArr = (id) => {
//     setArr(arr.filter(item => item._id !== id));
//   };

//   const addToArr = (newCourse) => {
//     setArr([...arr, newCourse]);
//   };

//   useEffect(() => {
//     setStatus("pending");
//     axios.get("http://localhost:4000/api/product")
//       .then(response => {
//         console.log(response);
//         setArr(response.data);
//       })
//       .catch(err => {
//         console.log(err);
//         alert("מצטערים, אי אפשר להביא את המוצרים: " + err.message);
//       })
//       .finally(() => {
//         setStatus("finish");
//       });
//   }, []);

//   return (
//     <Provider store={store}> {/* 👈 עוטף את כל האפליקציה */}
//       <Router>
//         <Routes>
          
//           <Route path="/add" element={<AddForm add={addToArr} />} />
//           <Route path="/" element={<List arr={arr} deleteFromArr={deleteFromArr} />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;
