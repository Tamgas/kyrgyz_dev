import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Event from './pages/Event';
import Video from './pages/Video';
import Organizations from './pages/Organizations';
import Community from './pages/Community';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import Vacancy from './pages/Vacancy';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='vacancy' element={<Vacancy/>}/>
      <Route path='event' element={<Event/>}/>
      <Route path='video' element={<Video/>}/>
      <Route path='organizations' element={<Organizations/>}/>
      <Route path='community' element={<Community/>}/>
      <Route path='hero' element={<Hero />}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
