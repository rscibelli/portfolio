import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Feedback from './components/Feedback/Feedback';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Golf from './components/Golf/Golf';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <App />
      <div style={{ textAlign: 'center' }}>
      <Routes>
        <Route exact path="/feedback" element={<Feedback />}/>
        <Route exact path="/portfolio" element={<Home />}/>
        <Route exact path="/projects" element={<Projects />}/>
        <Route exact path="/golf" element={<Golf />}/>
        <Route exact path="*" element={<Projects />}/>
      </Routes>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
