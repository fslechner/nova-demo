import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** This component does not support custom children. */
  children?: never;
  /** Array of navigation links shown in header */
  navLinks: Array<{ name: string; path: string }>;
  /** Align of the navLinks within the header */
  navLinksAlign?: "center" | "right";
}

export const Header: FC<Props> = ({
  navLinks,
  navLinksAlign,
  className,
  ...rest
}) => {
  const rootClasses = classNames("header", {
    [`nav--${navLinksAlign}`]: !!navLinksAlign
  });

  return (
    <header className={rootClasses} {...rest}>
      <nav>
        {navLinks.map((link: { name: string; path: string }) => (
          <NavLink
            className="link"
            key={link.path}
            to={`/${link.path}`}
            activeClassName="link--current"
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
