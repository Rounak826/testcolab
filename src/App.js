import './App.css';
import Nav from './component/Navbar/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './component/About/About';
import Home from './component/Home/Home';
import Content from './component/Content/content';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="content" element={<Content />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
