import React from 'react';
import { BrowserRouter, Route, Link, NavLink, HashRouter } from "react-router-dom";
import First from './components/First'
import Second from './components/Second'
import './index.css'

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <div class="screen">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/first'>First</NavLink>
        <NavLink to='/second'>Second</NavLink>
        </div>
      </HashRouter>

        <First />
        <Second />
    </React.Fragment>
  );
}

export default App;
