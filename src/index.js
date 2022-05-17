import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('box'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);


reportWebVitals();
