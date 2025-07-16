import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1> hello from main page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shopping">Click this to go shopping</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
