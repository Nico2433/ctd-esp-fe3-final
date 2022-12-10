import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [userData, setUserData] = useState({})
  const { id } = useParams();

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(data => data.json())
      .then(resp => {
        setUserData(resp)
      })
      .catch(error => console.error("Error", error))
  }, [])

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, margin: "50px", flexDirection: "column" }}>
      <Typography sx={{ alignSelf: "center" }} variant="h5" component="div">
        User details {id}
      </Typography>
      <Card sx={{ minWidth: 275, alignSelf: "center", margin: "25px auto" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {userData.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {userData.username}
          </Typography>
          <Typography variant="body2">
            Email: {userData.email}
            <br />
            Website: {userData.website}
            <br />
            Phone: {userData.phone}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Detail