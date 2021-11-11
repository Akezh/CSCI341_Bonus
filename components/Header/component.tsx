import React, { FC } from "react";
import { Props } from "./props";

export const Header: FC<Props> = ({ activeTab }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pandemic.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {activeTab === "Home" ? (
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              ) : (
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              )}
            </li>
            <li className="nav-item">
              {activeTab === "Countries" ? (
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/countries"
                >
                  Countries
                </a>
              ) : (
                <a className="nav-link" aria-current="page" href="/countries">
                  Countries
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
