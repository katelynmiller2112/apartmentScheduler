import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import routes from './routes/routeLists';
import WrapperRoutes from './routes/WrapperRoutes';

function App() {
  return (
    < Router >
    < Switch >
    {
      routes.map((route, i) => (
        <WrapperRoutes key={i} {...route}/>))}
    </Switch>
    </Router>
  );  
};

export default App;
