import React from "react";
import ReactDOM from "react-dom";
import CustomComponent from "./Component";

function App() {
  return (
    <div>
      <CustomComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
