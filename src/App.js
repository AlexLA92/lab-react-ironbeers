import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Beer from "./pages/Beer";
import Layout from "./components/pageSections/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:id" element={<Beer />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
