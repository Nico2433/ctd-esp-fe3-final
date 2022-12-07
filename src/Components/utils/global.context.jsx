import { createContext, useMemo, useState } from "react";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export const GlobalContext = createContext();

const themeLight = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#e4f0e2",
      box: "#ECE7E7",
      button: "#4F91CA"
    },
  }
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#403C3C",
      box: "#222222",
      button: "#D02020"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

const GlobalContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [users, setUsers] = useState([])
  const [light, setLight] = useState(true)
  const [updateFavs, setUpdateFavs] = useState(true)

  useMemo(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(resp => {
        setUsers(resp)
      })
      .catch(error => console.error("Error", error))
  }, [])

  const store = {
    users,
    light,
    updateFavs,
    setUpdateFavs: setUpdateFavs,
    changeTheme: setLight
  }

  return (
    <GlobalContext.Provider value={store}>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
          {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider