import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import axios  from 'axios';
import { useForm } from 'react-hook-form';
import { productFormSchema } from './../schema/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { MainProvider } from '../context/GetProducts';
import "./add.css"


const Add = () => {
  const {data,deleteData}=useContext(MainProvider)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:yupResolver(productFormSchema)
  });
  const createCard=async(values)=>{
   await axios.post("http://localhost:3000/products",values)
  }
  return (
    <>

    <form onSubmit={handleSubmit(createCard)}>
      <input {...register('title')} type="text" placeholder='title...' />
      <br />
      {errors.title?.message && <p style={{color:"red"}}>{errors.title?.message}</p>}
      <input {...register('price')} type="text" placeholder='price...' />
      <br />
      {errors.price?.message && <p style={{color:"red"}}>{errors.price?.message}</p>}
      <input {...register('src')} type="text" placeholder='img...' />
      <br />
      {errors.src?.message && <p style={{color:"red"}}>{errors.src?.message}</p>}
      <button type='submit'>Submit</button>
    </form>
    <Table striped bordered hover className='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th> Title</th>
          <th>Price </th>
          <th>Image</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((elem)=>{
            return <tr key={elem.id}>
              <td>{elem.id}</td>
              <td>{elem.title}</td>
              <td>{elem.price}</td>
              <td><img className='images' src={elem.src} alt="" /></td>
              <td><Button onClick={()=>{
                deleteData(elem.id)
              }} variant="danger">Delete</Button>{' '}</td>

            </tr>
          })
        }
      </tbody>
    </Table>
    </>
    
    
  )
}

export default Add
