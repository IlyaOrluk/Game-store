import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import ItemDetailsContainer from '../item-details';
import './app.scss';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route path="/itemdetails/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <ItemDetailsContainer itemId={id} />
          }} exact />

        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
        />
      </Switch>
    </main>
  );
};

export default App;
