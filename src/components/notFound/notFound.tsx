import React, { FC } from "react";
import { Link } from "react-router-dom";

// TODO: Router not routing to this page. Fix it!
export const NotFound: FC = () => (
  <div className="error">
    <div className="text-center">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <Link to="/" className="error__button error__link">
        go to Startpage
      </Link>
    </div>
  </div>
);

export default NotFound;
