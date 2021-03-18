import React from 'react';
import ReactDom from 'react-dom';
import App from './app.jsx';
import './main.css';
const mount = document.getElementById('app');

ReactDom.render(<App />, mount);