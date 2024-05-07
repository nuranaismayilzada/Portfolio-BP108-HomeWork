import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import "./product.css"
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const getAllData = async () => {
    const res = await axios("http://localhost:3000/products")
    // console.log(res.data);
    setProducts(res.data)
    setFilteredProduct(res.data);
  }
  useEffect(() => {
    getAllData()
  }, [])
  return (
    <>
      <div className='searching'>
        <input type="text" placeholder='Name searching' onChange={(e)=>{
          const searchText = e.target.value.toLowerCase();
          const filteredData = products.filter((elem) => elem.title.toLowerCase().includes(searchText));
          setFilteredProduct(filteredData)
        }} />
        

        <button onClick={() => {
          let newArr = [...filteredProduct].sort((a, b) =>
            a.title?.localeCompare(b.title)
          );
          setFilteredProduct(newArr);
        }}>A-Z</button>


        <button onClick={() => {
          let newArr = [...filteredProduct].sort((a, b) =>
            b.title?.localeCompare(a.title)
          );
          setFilteredProduct(newArr);
        }}>Z-A</button>


        <button onClick={() => {
          let newArr = [...filteredProduct].sort((a, b) => a.price - b.price);
          setProducts(newArr)
          setFilteredProduct(newArr);
        }}>Price Sort(min-max)</button>


        <button onClick={() => {
          let newArr = [...filteredProduct].sort((a, b) => b.price - a.price);
          setFilteredProduct(newArr);
        }}>Price Sort(max-min)</button>


        <button onClick={() => {
          let newArr = [...filteredProduct].sort((a, b) => a.rating?.rate - b.rating?.rate);
          setFilteredProduct(newArr);
        }}>Rate (min-max)</button>


        <button onClick={() => {
          let newArr = [...filteredProduct].sort((a, b) => b.rating?.rate - a.rating?.rate)
          setFilteredProduct(newArr)
        }}>Rate (max-min)</button>


        <button onClick={() => {
          let newArr = [...filteredProduct].sort((a, b) => a.rating?.count - b.rating?.count)
          setFilteredProduct(newArr)
        }}>Count (min-max)</button>



        <button onClick={() => {
          let newArr = [...filteredProduct].sort((a, b) => b.rating?.count - a.rating?.count)
          setFilteredProduct(newArr)
        }}>Count (max-min)</button>
      </div>
      <div className='table'>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Rate</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredProduct.map((p) => {

                let countColor = '';
                if (p.rating?.count < 100) {
                  countColor = 'red';
                } else if (p.rating?.count < 200) {
                  countColor = 'yellow';
                }

                return (
                  <tr  key={p.id}>
                    <td  style={{ backgroundColor: countColor }}>{p.id}</td>
                    <td  style={{ backgroundColor: countColor }}>{p.title}</td>
                    <td style={{ backgroundColor: countColor }}>{p.price}</td>
                    <td  style={{ backgroundColor: countColor }}>{p?.category}</td>
                    <td style={{ backgroundColor: countColor }}>{p?.rating?.rate}</td>
                    <td style={{ backgroundColor: countColor }} >{p?.rating?.count}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    </>

  )
}

export default Products
