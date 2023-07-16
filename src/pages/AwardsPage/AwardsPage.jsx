import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import Footer from 'shared/Footer/Footer';
import CardList from 'components/Cards/CardList/CardList';
import {
  selectBoughtGiftsIds,
  selectGifts,
} from 'redux/Awards/AwardsSelectors';
import { selectBalance } from 'redux/Planning/PlanningSelectors';
import { buyGiftsThunk, getGiftsThunk } from 'redux/Awards/AwardsOperations';
import { refreshBoughtGiftsIds } from 'redux/Awards/AwardsSlice';
import AwardsTitle from 'components/Awards/AwardsTitle/AwardsTitle';
import AwardsSubmitButton from 'components/Awards/AwardsSubmitButton/AwardsSubmitButton';
import CongratsModal from 'components/Modal/CongratsModal/CongratsModal';
import CardListLoader from 'shared/CardLoader/CardLoader';

import styles from '../../components/App.module.scss';
import style from './AwardsPage.module.scss';

const AwardsPage = () => {
  const boughtGiftsIds = useSelector(selectBoughtGiftsIds, shallowEqual);
  const balance = useSelector(selectBalance, shallowEqual);
  const gifts = useSelector(selectGifts, shallowEqual);

  const [dataForModal, setDataForModal] = useState([]);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGiftsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (boughtGiftsIds.length > 0) {
      setDataForModal(
        gifts.reduce((acc, gift) => {
          if (boughtGiftsIds.includes(gift.id)) {
            return [...acc, { image: gift.imageUrl, name: gift.title }];
          }
          return acc;
        }, [])
      );
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boughtGiftsIds]);

  const buyHandler = () => {
    const selectedGiftsIds = gifts.reduce((acc, gift) => {
      if (gift.isSelected) {
        return [...acc, gift.id];
      }
      return acc;
    }, []);

    if (selectedGiftsIds.length > 0) {
      const totalPrice = gifts.reduce((acc, gift) => {
        if (gift.isSelected) {
          return acc + gift.price;
        }
        return acc;
      }, 0);

      if (balance >= totalPrice) {
        dispatch(buyGiftsThunk({ giftIds: selectedGiftsIds }));
      } else {
        toast.error('Not enough points to make a purchase!');
      }
    } else {
      toast.info('Nothing is selected!');
    }
  };

  const handleModalClose = () => {
    const refreshedGifts = gifts.reduce((acc, gift) => {
      return [...acc, { ...gift, isSelected: false }];
    }, []);
    dispatch(refreshBoughtGiftsIds(refreshedGifts));
    setOpen(false);
  };

  return (
    <>
      <div className={styles.Container}>
        <div className={style.AwardBox}>
          <div className={style.AwardTitleBox}>
            <AwardsTitle />
          </div>
          <div className={style.CardListBox}>
            {gifts.length ? <CardList tasks={gifts} /> : <CardListLoader />}
          </div>
          <div className={style.ButtonBox}>
            <AwardsSubmitButton buyHandler={buyHandler} />
          </div>
          {open && (
            <CongratsModal awards={dataForModal} onClose={handleModalClose} />
          )}
          <div className={style.FooterBox}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardsPage;
