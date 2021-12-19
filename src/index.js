import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hero from './Hero';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Section2 />
    <Section3 />
    <Section4 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
