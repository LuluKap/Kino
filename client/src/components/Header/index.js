import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
          {/* <img className='logo' src="./img/Kino.png" alt="logo" /> */}
            <h1 className="m-0">KINO </h1>
            
          </Link>
        </div>
        <div className="control"> 
      {/* <form >
        <input
          className="input"
          type="text"  placeholder="Search your movies"/>
          <button type='submit'>submit</button>
          </form> */}
          </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
