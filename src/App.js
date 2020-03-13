import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import AppHeader from './AppHeader';
import Busca from './Busca';
import Pokemon from './Pokemon';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <AppHeader>
          <Link to="/busca">Busca Pokémon</Link>
          <Link to="/about">Projeto</Link>
        </AppHeader>
        <Switch>
          <Route path="/busca">
            <Busca />
          </Route>
          <Route path="/pokemon/:name">
            <Pokemon />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
