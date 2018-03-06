import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Navigation/Nav";
import CatalogContainer from "./Catalog/CatalogContainer";
import AuthorContainer from "./Author/AuthorContainer";
import BookContainer from "./Book/BookContainer";

const App = () => {
  return (
    <Switch>
      <Route path="/books" component={BookContainer} />
      <Route path="/authors" component={AuthorContainer} />
      <Route path="/" component={CatalogContainer} />
    </Switch>
  );
};

export default App;
