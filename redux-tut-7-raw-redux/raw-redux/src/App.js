import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Counter1 from "./components/Counter1";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Link to="/">Root</Link>
            <Link to="/counter1">Counter #1</Link>
            <Link to="/counter2">Counter #2</Link>
          </nav>

          <Route path="/counter1" component={Counter1} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
