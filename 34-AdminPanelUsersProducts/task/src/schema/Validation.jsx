import * as yup from 'yup';

const userSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  city: yup.string().required('City is required'),
  number: yup.number().required('Number is required'),
  street: yup.string().required('Street is required'),
  gender: yup.string().required('Gender is required'),
  balance: yup.number().required('Balance is required'),
});

const productSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  price: yup.number().required('Price is required'),
  category: yup.string().required('Category is required'),
  rate: yup.number().required('Rate is required'),
  count: yup.number().required('Count is required'),
});
