import React from 'react';

const navBar = () => {
  return(
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">

      <a className="navbar-brand" href="#koti">FIRMAN NIMI</a>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Näytä valikko">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#koti">Koti</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#jumbotron">Jumbotron</a>
          </li>
        </ul>
      </div>
      

    </nav>
  )
}
export default navBar;