// app() render routers

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import List from "./routes/List";
import "./style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>

        <Route path="/search" element={<Search />}></Route>

        <Route path="/list/:genres" element={<List />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
