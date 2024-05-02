import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import {useForm} from "react-hook-form";
// import {yupResolver} from "hookform/resolver/yup";
import { yupResolver } from '@hookform/resolvers/yup';
import './App.css'
import { productFormSchema } from './schema/productFrom';

function App() {

  const [suppliers, setSuppliers] = useState([])
  const {register,formState:{errors},handleSubmit}=useForm({
    resolver:yupResolver(productFormSchema)
  })

  const getDatas = async () => {
    const res = await axios("https://northwind.vercel.app/api/suppliers")
    setSuppliers(res?.data)
  }
  
  useEffect(() => {
    getDatas();
  }, [])
  const createProducts= async (values)=>{
 
    await axios.post("https://northwind.vercel.app/api/suppliers",values)
  }
  const deleteProduct=async (id)=>{
     await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
     getDatas()
  }
  return (
    <>
    <br />
      <form  onSubmit={handleSubmit(createProducts)}>
        <br />
        <br />
        <input {...register("companyName")} type="text" placeholder='Company Name' />
        {errors.companyName && (<p style={{color:"red"}}>{errors.companyName?.message}</p>)}
        <br />
        <br />
        <input {...register("contactName")} type="text" placeholder='Contact  Name' />
        {errors.contactName && (<p style={{color:"red"}}>{errors.contactName?.message}</p>)}
        <br />
        <br />
        <input {...register("Region")}  type="text" placeholder='Region' />
        {errors.Region && (<p style={{color:"red"}}>{errors.Region?.message}</p>)}

        <br />
        <br />
        <input  {...register("City")} type="text" placeholder=' City' />
        {errors.City && (<p style={{color:"red"}}>{errors.City?.message}</p>)}
        <br />
        <br />
        <button>Submit</button>
        <br />
        <br />
      </form>

      <select name="" id="">
        {suppliers?.map((sup)=>(
           <option key={uuidv4()}>{sup.contactTitle}</option>
        )
        )}
      </select>
        <br />
        <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>İd</th>
            <th>companyName</th>
            <th>contactName</th>
            <th>Region</th>
            <th>City</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            suppliers.map((elem) => {
              return <tr key={uuidv4()}>
                <td>{elem.id}</td>
                <td>{elem.companyName}</td>
                <td>{elem.contactName}</td>
                <td>{elem.address?.region}</td>
                <td>{elem.address?.city}</td>
                <td><button
                onClick={()=>{
                  deleteProduct(elem.id)
                }}
                >Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default App
