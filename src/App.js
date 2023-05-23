import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compnent/NavBar";
// import HomePage from "./compnent/HomePage";
// import Error from "./compnent/ErrorPage";
//import AddMovie from "./compnent/AddMoive";
import { lazy, Suspense } from "react";
//import ModulMovie from "./compnent/ModulMovie";
//import DataProvider from "./context/contextData";
//!Lazy Loading:
//const HomePage = lazy(() => import("./compnent/HomePage"));
//const AddMovie = lazy(() => import("./compnent/AddMoive"));
const Error = lazy(() => import("./compnent/ErrorPage"));
const ModulMovie = lazy(() => import("./compnent/ModulMovie"));
function App() {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/*" element={<ModulMovie></ModulMovie>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
