import { useEffect, useState } from 'react';
import axios from 'axios';

export const useProductManagement = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios("https://northwind.vercel.app/api/products");
    setData(res.data);
  }

  const deleteData = async (id) => {
    await axios.delete(`https://northwind.vercel.app/api/products/${id}`);
    getData();
  }

  const postData = async (formData) => {
    await axios.post("https://northwind.vercel.app/api/products", formData);
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, deleteData, postData };
}
