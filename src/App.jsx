import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout"
import { routes } from "./navigation"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {
              routes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
