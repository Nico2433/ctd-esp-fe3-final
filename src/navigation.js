import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"

export const routes = [
    { id: 1, path: "/contact", Element: Contact, title: "Contact" },
    { id: 2, path: "/dentist/:id", Element: Detail, title: "Detail" },
    { id: 3, path: "/favs", Element: Favs, title: "Favs" },
    { id: 4, path: "/home", Element: Home, title: "Home" },
    { id: 5, path: "/", Element: Home, title: "Home" },
]