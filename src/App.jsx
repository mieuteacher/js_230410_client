import {useState, useEffect} from 'react';
import './main.scss'
import {Routes} from 'react-router-dom';

import ExampleRouteConfig from './pages/examples/route.config';
function App() {

  return (
    <div className="App">
      <Routes>
          {/* Exemple Routing */}
          {ExampleRouteConfig}
      </Routes>
    </div>
  );
}

export default App;
