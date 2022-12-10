import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Restaurant from './Restaurant';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <Restaurant/>
    </BrowserRouter>
)
