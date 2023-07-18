import React from 'react';

import modalcat from 'images/modal-img/modal-cat.png';
import modalcatRet from 'images/modal-img/modal-cat-2x.png';

import style from './ModalContentGetGifts.module.scss';

const ModalContentGetGifts = ({ awards }) => {
  return (
    <>
      <div>
        <picture>
          <source srcSet={`${modalcat}, ${modalcatRet} 2x`} />
          <img className={style.ModalImg} src={modalcat} alt="modalcat" />
        </picture>
        <p className={style.ModalTitle}>Congratulations! You get:</p>
        <ul className={style.ModalAwardList}>
          {awards.map(award => (
            <li className={style.ModalAwardListItem} key={award.name}>
              <img
                className={style.ModalAwardImage}
                src={award.image}
                alt={award.name}
              ></img>
              <p className={style.ModalAwarddName}>{award.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ModalContentGetGifts;
