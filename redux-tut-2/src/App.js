import React from "react";

import Counter from "./Components/Counter";
import store from "./store/index";

function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

export default App;
