import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Styles/errorPage.css';

function ErrorPage() {
  return (
    <div className="error-page-wrapper">
      <div className="error-page-holder">
        <h1>Oops!</h1>
        <span className="error-title">404 - page not found</span>
        <p>The page you are looking for might be removed or temporarily unavailable</p>
        <Link className="btn btn-primary" to="/">
          go to homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
