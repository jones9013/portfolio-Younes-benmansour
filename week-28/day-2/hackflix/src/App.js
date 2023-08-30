// pusedo code
// set up .Env file to store our API key
// Set up redirects file
// create a componenet to hold our initial Axios call in useEffect
// loop over data and display a movie poster on the page
// make the movie poster clickable
// use link to mke our posters change the Url ON CLICK
//use Routes to Listen for the Url change and Display the appropriate component

import Catalogue from "./components/Catalogue";
import MovieDetails from "./components/MovieDetails";
import "./hackflix.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>hackflix</h1>
      <Routes>
        <Route path="/" element={<Catalogue />}>
          <Route path="/movie/:movieID" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
