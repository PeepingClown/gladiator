import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Mindy from './games/Mindy/Mindy';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/mindy" exact element={<Mindy/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
