import axios from "axios"

let baseUrl="http://localhost:4000/api/product/"
//כאן כל הקריאות לשרת בקשר למוצרים
export const getProducts=(page,perPage,search)=>{
    return axios.get(`${baseUrl}?page=${page}&perPage=${perPage}&search=${search}`)
}