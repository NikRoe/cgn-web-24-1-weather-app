import './App.css';
import Form from './components/Form';
import { uid } from 'uid';
import List from './components/List';

import useLocalStorageState from 'use-local-storage-state';

function App() {
  const [activities, setActivities] = useLocalStorageState('activites', {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  const isGoodWeather = true;

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <>
      <h1>Recap Project 4</h1>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
