import React from 'react';
import modalcat from 'images/modal-cat.png';

const ModalContentGetGifts = ({ awards }) => {
  return (
    <>
      <div>
        {<img src={modalcat} alt="modalcat" />}
        <h1>Congratulations! You get:</h1>
        <ul>
          {awards.map(award => (
            <li key={award.name}>
              <img src={award.image} alt={award.name}></img>
              <p>{award.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ModalContentGetGifts;
