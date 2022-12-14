import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// pages
import Home from './Pages/Home';
import Persuratan from './Pages/Persuratan';
import Riwayat from './Pages/Riwayat';
import Preview from './Pages/Preview';
import Print from './Pages/Print';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/persuratan" element={<Persuratan/>}></Route>
      <Route exact path="/riwayat" element={<Riwayat/>}></Route>
      <Route exact path="/App" element={<App/>}></Route>
      <Route exact path="/preview" element={<Preview/>}></Route>
      <Route exact path="/print" element={<Print/>}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
