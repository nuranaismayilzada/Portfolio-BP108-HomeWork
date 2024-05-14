import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios'
export const MainProvider=createContext(null)
export const GetProducts = ({children}) => {
    const [data,setData]=useState([])
    const [filterData,setfilterData]=useState([])
    const [basketData,setbasketData]=useState([])
    const getData=async()=>{
        const res=await axios("http://localhost:3000/products")
        setData(res?.data)
        setfilterData(res?.data)
    }
    const getBasketData=async()=>{
      const resBasket=await axios("http://localhost:3000/basket")
      setbasketData(resBasket?.data)
    }
    const deleteData=async(id)=>{
      const res=await axios.delete(`http://localhost:3000/products/${id}`)
      getData()
    }
    const deletegetBasket=async(id)=>{
      const res=await axios.delete(`http://localhost:3000/basket/${id}`)
      getData()
    }
    const women=()=>{
      const newWomenArr=data.filter((elem)=>elem.category=="Women")
      setfilterData(newWomenArr)
    }
    const men=()=>{
      const newMenArr=data.filter((elem)=>elem.category=="Men")
      setfilterData(newMenArr)
    }
    const accessories=()=>{
      const newAccArr=data.filter((elem)=>elem.category=="Accessories")
      setfilterData(newAccArr)
    }
    useEffect(() => {
      getData()
      deleteData();
      getBasketData();
    }, [])
    const values={
        data,
        filterData,
        getData,
        deleteData,
        women,
        men,
        accessories,
        basketData,
        deletegetBasket
    }
  return (
    <MainProvider.Provider value={values}>{children}</MainProvider.Provider>
  )
}

export default GetProducts
