import React from 'react';
import { Route, Switch, } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import CovidChart from './components/CovidChart';


function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={CovidChart} />
     </Switch>
    </>
  );
}

export default App;
