import React from 'react';
import Profil from './profile/ProfilPhoto';
import Name from './profile/FullName';
import Address from './profile/Address';
import './App.css';


function Main() {
  return (
    <div className="App">
        <Profil />
        <Name />
        <Address />
        <p><button className="button">Contact</button></p>
    </div>
  );
}

export default Main;
