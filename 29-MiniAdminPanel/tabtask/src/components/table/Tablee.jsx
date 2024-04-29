import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from "uuid";
import Form from "./inputs/Form";
import "./Table.css";

const Tablee = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);
      setData(res.data)
    })
  }, [])
  let [inputsValue, setinputsValue] = useState(0)
  let [inputsValueTwo, setinputsValueTwo] = useState(0)
  return (
    <div>
      <form action="" className='inputOne'>
        <input type="text" placeholder='Write price' onChange={(e) => {
          setinputsValue(e.target.value);
        }
        }
        />
        <input type="text" placeholder='Write name' className="inputTwo" onChange={(e) => {
          setinputsValueTwo(e.target.value)
        }} />
      </form>
      <Button variant="primary" className="changeBtn"
        onClick={() => {
          let obj = {}
          obj.unitPrice = inputsValue
          obj.name = inputsValueTwo
          axios.post("https://northwind.vercel.app/api/products/", obj)
            .then(response => {
              setData([...data, response.data]);
            })
        }}
      >
        Submit
      </Button>{' '}




      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>unitPrice</th>
            <th>Delete</th>
            <th>Edit Name</th>
            <th>Edit Price</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((elem) => {
              return <tr key={uuidv4()}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.unitPrice}</td>
                <td><Button variant="danger"
                  onClick={() => {
                    let newArr = data.filter((item) => item.id !== elem.id)
                    axios.delete("https://northwind.vercel.app/api/products" + "/" + elem.id)
                    alert("data silindi")
                    setData(newArr)
                  }}
                >Delete</Button>{' '}</td>
                <td><Button variant="warning"
                  onClick={() => {
                    let newName = prompt(`${elem.name} deyis`, elem.name)
                    axios.patch(`https://northwind.vercel.app/api/products/${elem.id}`, { name: newName })
                    let newArr = data.map((el) => {
                      if (el.id == elem.id) {
                        el.name = newName
                      }
                      return el;
                    })
                    setData(newArr)
                  }}
                >Edit Name</Button>{' '}</td>
                <td><Button variant="info"
                  onClick={() => {
                    let editPr = prompt(`${elem.unitPrice} deyis`, elem.unitPrice)
                    axios.patch(`https://northwind.vercel.app/api/products/${elem.id}`, { unitPrice: editPr })
                    let newEditPrArr = data.map((ell) => {
                      if (ell.id == elem.id) {
                        ell.unitPrice = editPr
                      }
                      return ell;
                    })
                    setData(newEditPrArr)
                  }}
                >Edit Price</Button>{' '}</td>
              </tr>
            })
          }

        </tbody>
      </Table>

    </div>
  )
}

export default Tablee