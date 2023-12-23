import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Blogs } from "./components/Blogs";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { Detail } from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog/:id" element={<Detail></Detail>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
