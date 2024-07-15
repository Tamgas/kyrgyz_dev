import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Vacancy from '../../pages/Vacancy';
import Event from '../../pages/Event';
import Video from '../../pages/Video';
import Organizations from '../../pages/Organizations';
import Community from '../../pages/Community';
import EventDetal from '../../pages/EventDetal';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Vacancy/>}/>
                <Route path='/events' element={<Event/>}/>
                <Route path='/video' element={<Video/>}/>
                <Route path='/organization' element={<Organizations/>}/>
                <Route path='/community' element={<Community/>}/>
                <Route path='/event-Detal' element={<EventDetal/>}/>
            </Routes>
        </div>
    );
};

export default Main;
