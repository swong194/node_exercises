import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Navigation/Nav";
import CatalogContainer from "./Catalog/CatalogContainer";

const App = () => {
  return <Route path="/" component={CatalogContainer} />;
};

export default App;
