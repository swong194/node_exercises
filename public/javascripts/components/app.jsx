import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Navigation/Nav";
import CatalogContainer from "./Catalog/CatalogContainer";
import AuthorContainer from "./Author/AuthorContainer";

const App = () => {
  return (
    <Switch>
      <Route path="/authors" component={AuthorContainer} />
      <Route path="/" component={CatalogContainer} />
    </Switch>
  );
};

export default App;
