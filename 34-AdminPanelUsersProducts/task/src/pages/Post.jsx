import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showForm, setShowForm] = useState(false);
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
    balance: "",
    title: "",
    price: "",
    category: "",
    rate: "",
    count: ""
  });

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let postUrl = '';

    if (selectedOption === 'Users') {
      postUrl = 'http://localhost:3000/users';
    } else if (selectedOption === 'Products') {
      postUrl = 'http://localhost:3000/products';
    }

    try {
      await axios.post(postUrl, formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        city: "",
        number: "",
        street: "",
        password: "",
        gender: "",
        balance: "",
        title: "",
        price: "",
        category: "",
        rate: "",
        count: ""
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <select name="options" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Post atmaq üçün seçin...</option>
        <option value="Users">Users</option>
        <option value="Products">Products</option>
      </select>
      {showForm && (
        <form onSubmit={handleSubmit}>
          {selectedOption === 'Users' && (
            <>
              <input type="text" placeholder='write user firstname' name="firstName" value={formData.firstName} onChange={handleChange} />
              <input type="text" placeholder='write user lastname' name="lastName" value={formData.lastName} onChange={handleChange} />
              <input type="text" placeholder='write user email' name="email" value={formData.email} onChange={handleChange} />
              <input type="text" placeholder='write user username' name="username" value={formData.username} onChange={handleChange} />
              <input type="text" placeholder='write user city' name="city" value={formData.city} onChange={handleChange} />
              <input type="number" placeholder='write user number' name="number" value={formData.number} onChange={handleChange} />
              <input type="text" placeholder='write user street' name="street" value={formData.street} onChange={handleChange} />
              <input type="text" placeholder='write user password' name="password" value={formData.password} onChange={handleChange} />
              <input type="text" placeholder='write user gender' name="gender" value={formData.gender} onChange={handleChange} />
              <input type="text" placeholder='write user balance' name="balance" value={formData.balance} onChange={handleChange} />
            </>
          )}
          {selectedOption === 'Products' && (
            <>
              <input type="text" placeholder='write product title' name="title" value={formData.title} onChange={handleChange} />
              <input type="number" placeholder='write product price' name="price" value={formData.price} onChange={handleChange} />
              <input type="text" placeholder='write product category' name="category" value={formData.category} onChange={handleChange} />
              <input type="number" placeholder='write product rate' name="rate" value={formData.rate} onChange={handleChange} />
              <input type="number" placeholder='write product count' name="count" value={formData.count} onChange={handleChange} />
            </>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Post;
