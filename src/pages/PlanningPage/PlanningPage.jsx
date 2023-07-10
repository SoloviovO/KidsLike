import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Footer from 'shared/Footer/Footer';
import PlanningPoints from 'components/PlanningPoints/PlanningPoints';
import CardsList from 'components/Cards/CardList/CardList';
import { selectAllTasks } from 'redux/Planning/PlanningSelectors';
import AddCustomTask from 'components/AddCustomTask/AddCustomTask';

const PlanningPage = () => {
  const tasks = useSelector(selectAllTasks, shallowEqual);

  return (
    <>
      <PlanningPoints />
      <AddCustomTask />
      {tasks.length ? <CardsList tasks={tasks} /> : <div>Loader</div>}
      <Footer />
    </>
  );
};

export default PlanningPage;
