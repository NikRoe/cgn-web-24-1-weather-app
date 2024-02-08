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

  return (
    <>
      <h1>Recap Project 4</h1>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
