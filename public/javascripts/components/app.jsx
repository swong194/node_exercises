import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Navigation/Nav";
import CatalogContainer from "./Catalog/CatalogContainer";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={CatalogContainer} />
    </Switch>
  );
};

export default App;
