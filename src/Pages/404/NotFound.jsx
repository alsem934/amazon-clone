import React from 'react';
import classes from './NotFound.module.css';
import LayOut from '../../Component/Layout/Layout';

function NotFound() {
  return (
    <LayOut>

    <div className={classes.notFound}>
      <h1>404</h1>
      <p>The page you are looking for is not found.</p>
    </div>
    </LayOut>
  );
}

export default NotFound;