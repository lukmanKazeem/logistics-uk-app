// import logo from './logo.svg';
import React from 'react';
import MainPage from './components/MainPage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/dist/output.css" rel="stylesheet" />
      </head>
      <body>
        <BrowserRouter>
       <MainPage>

       </MainPage>
       </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
