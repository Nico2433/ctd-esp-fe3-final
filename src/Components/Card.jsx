import { GlobalContext } from "./utils/global.context";
import { useReducer, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CardMedia, CardContent, Typography, Button } from "@mui/material";
import CardMaterial from "@mui/material/Card";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelIcon from '@mui/icons-material/Cancel';



const Card = ({ name, username, id }) => {

  const { updateFavs, setUpdateFavs } = useContext(GlobalContext)

  const initialState = {
    id: id,
    name: name,
    username: username,
    fav: false
  }

  function reducer(state, action) {

    switch (action.type) {

      case "favorite":
        return {
          ...state,
          fav: false
        }

      case "unfavorite":
        return {
          ...state,
          fav: true
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const [updateData, setUpdateData] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("favUsers")) {
      let favoritesParsed = JSON.parse(localStorage.getItem("favUsers"))
      const filteredDentist = favoritesParsed.filter(item => item.id === state.id)
      filteredDentist.length === 1 ? dispatch({ type: "favorite" }) : dispatch({ type: "unfavorite" })
    } else {
      localStorage.setItem("favUsers", JSON.stringify([]))
    }
  }, [updateData])

  const addFav = () => {
    const favorites = localStorage.getItem("favUsers")
    if (favorites) {
      let favoritesParsed = JSON.parse(favorites)
      const filteredDentist = favoritesParsed.filter(item => item.id !== state.id)
      const doesExist = filteredDentist.length !== favoritesParsed.length

      doesExist ? favoritesParsed = filteredDentist : favoritesParsed.push(state)
      localStorage.setItem("favUsers", JSON.stringify(favoritesParsed))
      setUpdateFavs(!updateFavs)
      setUpdateData(!updateData)
    } else {
      localStorage.setItem("favUsers", JSON.stringify([state]))
      setUpdateFavs(!updateFavs)
      setUpdateData(!updateData)
    }
  }

  return (
    <CardMaterial sx={{ width: "300px", bgcolor: "background.box" }}>
      <CardMedia
        component="img"
        height="194"
        image="./images/doctor.jpg"
        alt="Imagen doctor"
      />

      <CardContent sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column" }}>
        <Link style={{ alignSelf: "center" }} to={`/dentist/${id}`}>
          <Typography sx={{ color: "text.primary" }} gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary" sx={{ alignSelf: "center", color: "text.primary" }}>
          {username}
        </Typography>
      </CardContent>
      <Button onClick={() => addFav(state)} size="small" color="primary" sx={{ width: "100%" }}>
        {state.fav ? <FavoriteIcon /> : <CancelIcon />}
      </Button>
    </CardMaterial>
  );
};

export default Card;
