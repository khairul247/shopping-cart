import { Link, Route, Routes } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <h1> hello from main page</h1>
      <nav>
        <ul>
          <li>
            <Link to="shopping">Click this to go shopping</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
