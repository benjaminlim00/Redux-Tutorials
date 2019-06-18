import React from "react";
import "./App.css";

import InputMirror from "./Components/InputMirror";
import store from "./store/index";

function App() {
  return (
    <div className="App">
      <InputMirror store={store} />
    </div>
  );
}

export default App;
