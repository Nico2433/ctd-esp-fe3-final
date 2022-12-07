import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favorites = JSON.parse(localStorage.getItem("favUsers"))

  const { updateFavs, setUpdateFavs } = useContext(GlobalContext)

  useEffect(() => {

  }, [updateFavs])

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid" style={{ marginBottom: "100px" }}>
        {favorites.map((fav) => (
          <Card key={fav.id} id={fav.id} name={fav.name} username={fav.username} />
        ))}
      </div>
    </>
  );
};

export default Favs;
