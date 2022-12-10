import { BottomNavigation, Box, ButtonBase, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {

  return (
    <BottomNavigation sx={{
      display: { xs: "none", md: "flex" },
      flexDirection: "column",
      height: "100%",
    }}
      color={"background.box"}>

      <ButtonBase onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} sx={{
        bgcolor: "#f21d1d",
        width: "100%",
        padding: "15px 0px"
      }}>Go to top
      </ButtonBase>

      <Box sx={{
        display: { xs: "none", md: "flex" },
        bgcolor: "background.box",
        justifyContent: "space-between",
        width: "75%",
        alignSelf: "center",
        padding: "35px"
      }}>
        <img style={{ width: "300px" }} src="./images/DH.png" alt="" />

        <Box sx={{
          display: { xs: 'none', md: 'flex' },
          width: "150px",
          justifyContent: "space-between"
        }}>
          <IconButton role={"facebook"} href={"https://www.facebook.com"}><FacebookIcon sx={{ fontSize: "40px" }}/></IconButton>
          <IconButton role={"instagram"} href={"https://www.instagram.com"}> <InstagramIcon sx={{ fontSize: "40px" }}/></IconButton>
          <IconButton role={"whatsapp"} href={"https://www.whatsapp.com"}><WhatsAppIcon sx={{ fontSize: "40px" }}/></IconButton>
        </Box>

      </Box>
    </BottomNavigation>
  )
}

export default Footer
