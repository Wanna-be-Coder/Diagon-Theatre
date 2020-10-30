import React from 'react';
import HomaPage from './pages/home/HomePage';
import SearchResultPage from './pages/search-result/SearchResultPage';
import DetailPage from './pages/details/DetailPage';
import NavBar from './components/NavBar/NavBar';

import {Route,Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
      <Route exact path='/' component={HomaPage} />
      <Route exact path='/search/:name' component={SearchResultPage} />
      <Route exact path='/detail/:id' component={DetailPage} />
      </Switch>

    </div>
  );
}

export default App;
