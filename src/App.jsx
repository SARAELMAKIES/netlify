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
  const deleteFromArr = (name) => {
    setArr(arr.filter(item => item.name != name))
  }
  const addToArr = (newCourse) => {
    setArr([...arr, newCourse])
  }
  useEffect(() => {
    setStatus("pending")
    axios.get("mongodb+srv://soul6787344:xZnXpbiCWixJmNJG@cluster0.qyvps.mongodb.net/serverkollleg?retryWrites=true&w=majority&appName=Cluster0").then(response => {
      console.log(response);
      setArr(response.data)
    }).catch(err => {
      console.log(err);
      alert("מצטערים אי אפשר להביא את הספרים" + err.message)
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
