import { BottomNavigation, Box, ButtonBase } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {

  return (
    <BottomNavigation sx={{
      display: { xs: "none", md: "flex" },
      flexDirection: "column",
      bgcolor: "background.box",
      height: "100%",
    }}>

      <ButtonBase onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} sx={{
        bgcolor: "#f21d1d",
        width: "100%",
        padding: "15px 0px"
      }}>Volver para arriba
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
          <FacebookIcon sx={{ fontSize: "40px" }} />
          <InstagramIcon sx={{ fontSize: "40px" }} />
          <WhatsAppIcon sx={{ fontSize: "40px" }} />
        </Box>

      </Box>
    </BottomNavigation>
  )
}

export default Footer
