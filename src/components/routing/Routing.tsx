import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import Layout from './Layout';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contacts/Contact';
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/skills' element={<Skills></Skills>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing