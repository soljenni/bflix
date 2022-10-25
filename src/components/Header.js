import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../img/BFILX.png";
import { AiOutlineSearch } from "react-icons/ai";

function Jeader() {
  return (
    <div className="header">
      <div className="header_left">
        <h1 className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </h1>
        <div className="gnb">
          {/* <AiOutlineMenu/> */}
          <ul className="gnb_list">
            <li className="gnb_item">
              <Link to={`/list/comedy`}>Comedy</Link>
            </li>
            <li className="gnb_item">
              <Link to={`/list/Romance`}>Romance</Link>
            </li>
            <li className="gnb_item">
              <Link to={`/list/action`}>Action</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header_right">
        <Link to="/search">
          <AiOutlineSearch className="search_icon" />
        </Link>
      </div>
    </div>
  );
}

export default Jeader;
