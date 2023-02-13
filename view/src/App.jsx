import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Routes>
      {Object.keys(routes).map((route) => {
        return (
          <Route
            key={routes[route].key}
            element={routes[route].element}
            path={routes[route].path}
          />
        );
      })}
    </Routes>
  );
}

export default App;
