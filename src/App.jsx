import "./main.scss";
import { Routes } from "react-router-dom";
import ExampleRouteConfig from "./pages/examples/route.config";

/* Antd */
import { AutoComplete, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function App() {
  const renderTitle = (title) => (
    <span>
      {title}
      <a
        style={{
          float: 'right',
        }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );

  const renderItem = (title, count) => ({
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  });

  const options = [
    {
      label: renderTitle('Libraries'),
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
      label: renderTitle('Solutions'),
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
      label: renderTitle('Articles'),
      options: [renderItem('AntDesign design language', 100000)],
    },
  ];
  return (
    <div className="root_page">
      {/* Navbar */}
      <nav>
        <div className="nav_content">
          <div className="left_content">
            {/* Logo */}
            <img src={`${process.env.REACT_APP_SERVER_HOST}logo1.png`} className="logo"/>
          </div>
          <div className="middle_content">

          </div>
          <div className="right_content">
      
          </div>
        </div>
      </nav>
      {/* Body */}
      <Routes>
        {/* Exemple Routing */}
        {ExampleRouteConfig}
      </Routes>
      {/* Footer 8770199 3 22 23 */}
    </div>
  );
}

export default App;
