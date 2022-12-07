import { TextField, Button, Card, Typography } from '@mui/material'
import { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';


const Form = () => {
  const validation = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
      .string('Enter your name')
      .min(5, 'Name should be a minimum of 5 characters length')
      .required('Name is required'),
  });

  const [message, setMessage] = useState("")

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values);
      setMessage(`Gracias ${values.name}, te contactaremos via email`)
    },
  });

  return (
    <Card sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: "column", margin: "100px auto", width: "50%", height: "500px", bgcolor: "background.box" }}>
      <form onSubmit={formik.handleSubmit} style={{ justifyContent: "center", height: "50%", margin: "auto" }} >
        <TextField
          fullWidth
          id="name"
          name="name"
          type="name"
          label="Name"
          autoComplete='off'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          autoComplete='off'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ my: 2 }}
        />
        <Button sx={{ bgcolor: "background.button", color: "text.primary" }} type="submit">
          Submit
        </Button>
      </form>
      <Typography variant='h5' sx={{ textAlign: "center", marginBottom: "20px" }}>{message}</Typography>
    </Card>
  )
};

export default Form;
