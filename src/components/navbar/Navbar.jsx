import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <>

      <div className="nav-container">
        <div className="nav">
          <div className="title">
            <Link to="/"><p>Coding <br /> Crafters</p></Link>
          </div>

          <div>
            <input type="checkbox" id="hamburger-toggle" className="hamburger-checkbox" />
            <label htmlFor="hamburger-toggle" className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </label>

          <div className="div-item">
            <div className="items item1">
              <Link className="itemss" to="/">Home</Link>
            </div>
            <div className="items item2" >
              <Link className="itemss" to="./post"> {props.post}</Link>
            </div>
            <div className="items item3">
            <Link className="itemss" to="/test2aa">Test2</Link>

            </div>
            <div className="items item4">
              <Link className="itemss" to="/test1">Test1</Link>
            </div>
            <div className="items item5">
            <Link className="itemss" to="/test1">Announcement</Link>

            </div>
            <div className="items profile_item">
              <img className="profile-pic" src="./profile-pic.png" alt="" />
            </div>
          </div>
        </div>


      </div>
      </div>


    </>
  );
};
export default Navbar;
Navbar.proptype = {
  Title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  Title: "Coding Crafters",
  post: "Post",
};
