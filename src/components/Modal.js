import React from "react";
import "./Style/Modal.css";
import Spinner from "react-bootstrap/Spinner";

const Modal = (props) => {
  const { open, movieCharacters, onClose, movie, loading } = props;

  if (!open) return null;

  movieCharacters.sort((a, b) => (a.name > b.name ? 1 : -1));


  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const listStyle = {
    display: 'block',
    color: 'purple !important'
  };

  return (
    <div className="overlay">"
      <div className="movieInfo" style={loading ? {spinnerStyle} : {listStyle}}>
        <h2 className="title">{movie}</h2>
        {loading && <Spinner animation="border" variant="primary" />}
        {movieCharacters.map((char) => (
          <div>
            <ul>
              <li>{char.name}</li>
            </ul>
          </div>
        ))}
        <div>
          <button className="movieInfo-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
