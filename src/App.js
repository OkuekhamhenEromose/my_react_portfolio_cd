import React from "react";

import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="pt-[16px] lg:pt-[12px]">
        <AnimRoutes />
      </main>
      </Router>
    </>
  );
};

export default App;
