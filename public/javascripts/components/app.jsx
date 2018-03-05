import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Navigation/Nav";
import CatalogContainer from "./Catalog/CatalogContainer";

const App = () => {
  return (
    <div>
      <Route path="/" component={Nav} />
      <Route path="/" component={CatalogContainer} />
    </div>
  );
};

export default App;
