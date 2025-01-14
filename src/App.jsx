import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './BookList'
import AddBookForm from './AddBookForm'
import axios from "axios";

function App() {

  let [arr, setArr] = useState([])
  let [status, setStatus] = useState("init")
  const deleteFromArr = (id) => {
    setArr(arr.filter(item => item._id  != id))
  }
  const addToArr = (newCourse) => {
    setArr([...arr, newCourse])
  }
  useEffect(() => {
    setStatus("pending")
    axios.get(" http://localhost:4000/api/product").then(response => {
      console.log(response);
      setArr(response.data)
    }).catch(err => {
      console.log(err);
      alert("מצטערים אי אפשר להביא את מוצרים" + err.message)
    }).finally(() => {
      setStatus("finish")
    })
  }, [])
  return (
    <>
      <AddBookForm  add={addToArr}/>
      <BookList arr={arr} deleteFromArr={deleteFromArr}/>
    </>
  )
}

export default App
