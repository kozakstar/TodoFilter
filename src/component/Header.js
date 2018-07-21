import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Note App</h1>
    <NavLink activeClassName="active" to="/" exact={true}>
      Home
    </NavLink>

    <NavLink activeClassName="active" to="/create">
      Create note
    </NavLink>
  </div>
);

export default Header;
