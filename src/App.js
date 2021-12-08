import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Mindy from './games/Mindy/Mindy';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/mindy" exact element={<Mindy/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
