import React from 'react';

const card = () => {
  return(
    <div className="card">

      <div className="card-header">
        KORTTI HEADER
      </div>

      <div className="card-body">
        <h4 className="card-title">Minun korttini</h4>
        <h6 className="card-subtitle text-muted">Minun väliotsikkoni</h6>
        <p className="card-text">Minun korttini sisältö. Tämä on hienoa ja tärkeää sisältöä...</p>
      </div>

    </div>
  )
}
export default card;