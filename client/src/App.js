import './App.css';
import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
import Navbar from './components/Navbar';
import Body from './components/Body';
import Form from './components/Form';
import Home from './components/Home';
import Character from './components/Character';
import Footer from './components/Footer';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Form />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
      <Footer  />
    </div>
  );
}

export default App;
