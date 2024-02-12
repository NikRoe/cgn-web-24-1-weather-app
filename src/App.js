import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { uid } from 'uid';

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  return (
    <>
      <h1>Recap Project 4</h1>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
