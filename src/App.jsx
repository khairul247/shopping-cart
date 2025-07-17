import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">khairulaming</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="shopping">Shop</Link></li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
