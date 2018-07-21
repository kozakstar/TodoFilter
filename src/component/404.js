import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div>
    <span className="error">404!</span>
    <Link to="/">Home</Link>
  </div>
);

export default Error;
