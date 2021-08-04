import './App.css';
import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import routes from './routes/routeLists';

function App() {
  console.log(routes);
  const routeComponents = routes.map(({ path, component }, key) =>
    <Route exact path={path} component={component} key={ key}></Route>

  );
  return (
    <BrowserRouter>
      {routeComponents}
      <div/>
    </BrowserRouter>
  );  
};

export default App;
