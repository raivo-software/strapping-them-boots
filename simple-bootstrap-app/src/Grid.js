import React from 'react';
import './Grid.css';
import Card from './Card';

const grid = () => {
  const diaTexts = ['EKA DIA', 'TOKA DIA', 'KOLMAS DIA'];
  const dia = diaTexts.map((x, index) => 
    <div key={index} className={"carousel-item" + (index === 0 ? ' active' : '')}>
      <h3 className="display-2">{x}</h3>
    </div>
    );
  return(
    <div className="container" style={{paddingTop: "3rem"}}>

      <div className="row" id="koti">
        <div className="col bordered">
          <h3 className="display-4">KARUSELLI</h3>
          <div className="carousel slide" data-ride="carousel" data-interval="5000">
            <div className="carousel-inner">
              {dia}
            </div>
          </div>
        </div>
      </div>

      <div className="row" id="jumbotron">
        <div className="col bordered">
          <h3 className="display-4">JUMBOTRON</h3>
          <div className="jumbotron">
            <h4>Jumbotron otsikko</h4>
            <p className="lead">Jotakin mielenkiintoista tekstisisältöä</p>
            <p className="lead">Jotakin mielenkiintoista tekstisisältöä</p>
            <p className="lead">Jotakin mielenkiintoista tekstisisältöä</p>
            <p className="lead">Jotakin mielenkiintoista tekstisisältöä</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm bordered">
          <h3>CARDS</h3>
          <Card />
          <hr />
          <Card />
          <hr />
          <Card />
        </div>
        <div className="col-sm bordered">
          <h3>BUTTONS</h3>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">Nappi 1</button>
            <button type="button" className="btn btn-secondary">Nappi 2</button>
            <button type="button" className="btn btn-warning">Nappi 3</button>
            <button type="button" className="btn btn-danger">Nappi 4 <span className="badge badge-light">#</span></button>
          </div>
        </div>
        <div className="col-sm bordered">
          <h3>BADGE</h3>
          <h2>SUCCESS?<span className="badge badge-success">!</span></h2>
        </div>
      </div>

    </div>
  )
}
export default grid;