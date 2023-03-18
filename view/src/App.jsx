import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "@/routes";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const validPaths = Object.values(routes).map((route) => route.path);
    if (!validPaths.includes(location.pathname)) {
      navigate("/notfound");
    }
  }, [location.pathname, navigate]);

  return (
    <Routes>
      {Object.keys(routes).map((route) => {
        return (
          <Route
            key={routes[route].path}
            element={routes[route].element}
            path={routes[route].path}
          />
        );
      })}
    </Routes>
  );
}

export default App;
