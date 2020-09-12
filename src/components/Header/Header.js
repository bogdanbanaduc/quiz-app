import React from 'react';
import './Header.css';

function Header() {
  return (
        <header>
        <nav style={{display: 'flex', padding: '10px', justifyContent: 'flex-start'}}>
                  <p >Browse</p>
                  <p >Create</p>
                  <p >Profile</p>
                  <p >Sign Out</p>
        </nav>
        </header>
  );
}


export default Header;