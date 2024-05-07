import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./users.css"
import { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([]);


  //Modall
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  //
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    city: "",
    number: "",
    street: "",
    password: "",
    gender: "",
    balance: ""
  });
  


  const getAllUsers = async () => {
    const result = await axios("http://localhost:3000/users")
    console.log(result.data);
    setUsers(result.data)
    setFilteredUsers(result.data)
  }

  const handleSubmit = async () => {
      const response = await axios.put(`http://localhost:3000/users/${selectedUser.id}`, formData);
      handleCloseModal(); 
      getAllUsers();   
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const deleteData=async(id)=>{
  //  const resp=await axios.delete(`http://localhost:3000/users/${id}`)
  //  console.log(resp.data);
  //   getAllUsers()
  // }
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <input type="text" placeholder='searching...' className='searchusername'
      onChange={(e)=>{
        console.log(e.target.value);
        let userNameSearching=users.filter((elem)=>elem.username.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredUsers(userNameSearching)
      }} />

      <button className='namesort'
      onClick={()=>{
        let newArr=[...filteredUsers].sort((a,b)=>
          a.name.firstname.localeCompare(b.name.firstname)
        );
        setFilteredUsers(newArr)
      }}
      >A-Z (name)</button>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>Email</th>
          <th>Username</th>
          <th>City</th>
          <th>Number</th>
          <th>Street</th>
          <th>password</th>
          <th>Gender</th>
          <th>Balance</th>
          <th>Register date</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
      {
        filteredUsers.map((elem)=>{
          return <tr key={elem.id}>
            <td>{elem?.id}</td>
            <td>{elem?.name?.firstname}</td>
            <td>{elem?.name?.lastname}</td>
            <td>{elem?.email}</td>
            <td>{elem?.username}</td>
            <td>{elem?.address?.city}</td>
            <td>{elem?.address?.number}</td>
            <td>{elem?.address?.street}</td>
            <td>{elem?.password}</td>
            <td>{elem?.name?.gender}</td>
            <td>{elem?.balance}</td>
            <td>register date</td>
            <td><Button variant="warning"
            onClick={()=>handleShowModal(elem)}
            >Edit</Button>{' '}</td>
            <td><Button variant="danger">Delete</Button>{' '}</td>
            <td><Button variant="info">Detail</Button>{' '}</td>
          </tr>
        })
      }
      </tbody>
    </Table>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Enter first name"
                defaultValue={selectedUser ? selectedUser.name.firstname : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                defaultValue={selectedUser ? selectedUser.name.lastname : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue={selectedUser ? selectedUser.email : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                defaultValue={selectedUser ? selectedUser.username : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                defaultValue={selectedUser ? selectedUser.address.city : ""}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number"
                defaultValue={selectedUser ? selectedUser.address.number : ""}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter street"
                defaultValue={selectedUser ? selectedUser.address.street : ""}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                defaultValue={selectedUser ? selectedUser.password : ""}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter gender"
                defaultValue={selectedUser ? selectedUser.name.gender : ""}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter balance"
                // defaultValue={selectedUser ? selectedUser.balance : ""}
                name="balance"
                value={formData.balance}
                onChange={handleChange}
              />
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Users
