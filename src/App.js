import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compnent/NavBar";
// import HomePage from "./compnent/HomePage";
// import Error from "./compnent/ErrorPage";
//import AddMovie from "./compnent/AddMoive";
import { lazy, Suspense } from "react";
import DataProvider from "./context/contextData";
//!Lazy Loading:
const HomePage = lazy(() => import("./compnent/HomePage"));
const AddMovie = lazy(() => import("./compnent/AddMoive"));
const Error = lazy(() => import("./compnent/ErrorPage"));
function App() {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <div className="App">
        <BrowserRouter>
          <DataProvider>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/add" element={<AddMovie></AddMovie>}></Route>
              <Route path="*" element={<Error></Error>}></Route>
            </Routes>
          </DataProvider>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
