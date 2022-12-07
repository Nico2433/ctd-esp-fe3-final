import { Typography, Card } from "@mui/material"
import { Box } from "@mui/system"
import Form from "../Components/Form"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <Box>
      <Box sx={{
        margin: "20px auto",
        width: "420px"
      }}>
        <Typography variant="h4">Want to know more about?</Typography>
        <Typography variant="h4">Send us your contact data</Typography>
      </Box>
      <Form />
    </Box>
  )
}

export default Contact