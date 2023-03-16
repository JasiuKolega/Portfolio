import * as React from 'react'
import { Header } from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Works from "./pages/Works";
import { Posts } from './pages/Posts';


const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/works" element={<Works />} />
      </Routes>

      <Routes>
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
