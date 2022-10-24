import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Feedback from '../Feedback/Feedback'
import Home from '../Home/Home'
import Project from '../Project/Project'

const AppRoutes = () => {
    <BrowserRouter>
        <Routes>
            <Route exact path="/feedback" element={<Feedback />}/>
            <Route exact path="/portfolio" element={<Home />}/>
            <Route exact path="/rob" element={<Project />}/>
            {/* <Route exact path="*" element={}/> */}
        </Routes>
    </BrowserRouter>
}

export default AppRoutes;