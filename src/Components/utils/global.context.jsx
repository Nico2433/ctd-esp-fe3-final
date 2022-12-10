import { createContext, useState, useReducer } from "react";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [updateFavs, setUpdateFavs] = useState(true)

  const initialState = {
    light: true
  }
  
  function reducer(state, action) {
  
    switch (action.type) {
  
      case "light":
        return {
          ...state,
          light: true
        }
  
      case "dark":
        return {
          ...state,
          light: false
        }
  
      default:
        return state
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const theme = createTheme({
    palette: {
      mode: state.light ? "light" : "dark",
      background: {
        default: state.light ? "#e4f0e2" : "#403C3C",
        box: state.light ? "#ECE7E7" : "#222222",
        button: state.light ? "#4F91CA" : "#D02020"
      },
      text: {
        primary: state.light ? "rgba(0, 0, 0, 0.87)" : "#fff"
      }
    }
  });
  const store = {
    state,
    dispatch,
    updateFavs,
    setUpdateFavs,
  }

  return (
    <GlobalContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider