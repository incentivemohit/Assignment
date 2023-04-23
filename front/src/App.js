import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Problem1 from "./components/Problem1";
import Problem2 from "./components/Problem2";
import Problem3 from "./components/Problem3";
import Problem4 from "./components/Problem4";
import Problem5 from "./components/Problem5";

function App() {
  return (
    <>
      <div className="py-2">
        <p className="text-center text-3xl py-1">User Details</p>
        <div className="flex justify-center gap-3">
          <Link to="/">
            <button className="bg-blue-400 py-3 px-5 rounded-full font-medium  text-white hover:bg-green-700 ">
              Home
            </button>
          </Link>
          <Link to="/api/v1/userDetails/users-income-lower-than-and-carbrand">
            <button className="bg-blue-400 py-3 px-5 rounded-full font-medium  text-white hover:bg-green-700 ">
              Problem 1
            </button>
          </Link>
          <Link to="/api/v1/userDetails/male-users-phone-price-greater">
            <button className="bg-blue-400 py-3 px-5 rounded-full font-medium  text-white hover:bg-green-700 ">
              Problem 2
            </button>
          </Link>
          <Link to="/api/v1/userDetails/users-lastname-and-quote-character-length-and-email-lastname">
            <button className="bg-blue-400 py-3 px-5 rounded-full font-medium  text-white hover:bg-green-700 ">
              Problem 3
            </button>
          </Link>
          <Link to="/api/v1/userDetails/users-carbrand-and-email-without-digits">
            <button className="bg-blue-400 py-3 px-5 rounded-full font-medium  text-white hover:bg-green-700 ">
              Problem 4
            </button>
          </Link>
          <Link to="/api/v1/userDetails/showing-data-top-10-cities">
            <button className="bg-blue-400 py-3 px-5 rounded-full font-medium  text-white hover:bg-green-700 ">
              Problem 5
            </button>
          </Link>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/api/v1/userDetails/users-income-lower-than-and-carbrand"
          element={<Problem1 />}
        />
        <Route
          exact
          path="/api/v1/userDetails/male-users-phone-price-greater"
          element={<Problem2 />}
        />
        <Route
          exact
          path="/api/v1/userDetails/users-lastname-and-quote-character-length-and-email-lastname"
          element={<Problem3 />}
        />
        <Route
          exact
          path="/api/v1/userDetails/users-carbrand-and-email-without-digits"
          element={<Problem4 />}
        />
        <Route
          exact
          path="/api/v1/userDetails/showing-data-top-10-cities"
          element={<Problem5 />}
        />
      </Routes>
    </>
  );
}

export default App;
