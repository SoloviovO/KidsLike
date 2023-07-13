import React from 'react';
import modalcat from 'images/modal-img/modal-cat.png';
import modalcatRet from 'images/modal-img/modal-cat-2x.png';

const ModalContentGetGifts = ({ awards }) => {
  return (
    <>
      <div>
        <picture>
          <source srcSet={`${modalcat}, ${modalcatRet} 2x`} />
          <img src={modalcat} alt="modalcat" />
        </picture>
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
