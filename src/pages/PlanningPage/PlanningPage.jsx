import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Footer from 'shared/Footer/Footer';
import PlanningPoints from 'components/PlanningPoints/PlanningPoints';
import CardsList from 'components/Cards/CardList/CardList';
import { selectAllTasks } from 'redux/Planning/PlanningSelectors';
import AddCustomTask from 'components/AddCustomTask/AddCustomTask';
import CardLoader from 'shared/CardLoader/CardLoader';

import styles from '../../components/App.module.scss';
import style from './PlanningPage.module.scss';

const PlanningPage = () => {
  const tasks = useSelector(selectAllTasks, shallowEqual);

  return (
    <>
      <div className={styles.Container}>
        <div className={style.PlanningBox}>
          <div className={style.StatsBox}>
            <PlanningPoints />
            <AddCustomTask />
          </div>
          <div className={style.CardListBox}>
            {tasks.length ? <CardsList tasks={tasks} /> : <CardLoader />}
          </div>
          <div className={style.FooterBox}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanningPage;
