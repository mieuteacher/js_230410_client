import {useState, useEffect} from 'react';
import './main.scss'
import {Routes} from 'react-router-dom';

import ExampleRouteConfig from './pages/examples/route.config';
function App() {

  return (
    <div className="App">
      <h1>Hello JS230410</h1>
      <Routes>
          {/* Exemple Routing */}
          {ExampleRouteConfig}
      </Routes>
    </div>
  );
}

export default App;
