import React from 'react';

const Header = () => {
  return (
    <div className="row">
      <div id="topBanner" className="col-lg-12">
        <h1>React Movies</h1>
        <h4>Find your movie</h4>
        <br />
        <p>
            <input type="text" className="textinput"></input>
            <button className="btn btn-default">Search..</button>
        </p>
      </div>
    </div>
  )
}

export default Header;
