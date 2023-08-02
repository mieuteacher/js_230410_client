import "./main.scss";
import { Routes } from "react-router-dom";
import ExampleRouteConfig from "./pages/examples/route.config";
import { useState } from 'react';

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
function App() {
  const [feature, setFeature] = useState([
    "Find a Store", "Help", "Join Us", "Sign In"
  ])
  return (
    <div className="root_page">
      {/* Before Nav */}
      <section className="before_nav">
        <div className="before_nav_content">
          <h1 className="brand_name">JS_230410_CLIENT</h1>
          <div className="feature">
              {
                feature.map((item, index) => (
                  <span className="feature_item" key={Date.now() * Math.random()}>{item}</span>
                ))
              }
          </div>
        </div>
      </section>
      {/* Navbar */}
      <Navbar/>
      {/* Body */}
      <section className="body_container">
        <div className="body_container_center">
          <Routes>
            {/* Exemple Routing */}
            {ExampleRouteConfig}
          </Routes>
        </div>
      </section>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
