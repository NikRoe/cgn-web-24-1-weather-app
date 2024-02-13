import './App.css';
import Form from './components/Form';
import { uid } from 'uid';
import List from './components/List';

import useLocalStorageState from 'use-local-storage-state';
import { useEffect, useState } from 'react';

function App() {
  const [activities, setActivities] = useLocalStorageState('activites', {
    defaultValue: [],
  });
  const [weather, setWeather] = useState();

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        'https://example-apis.vercel.app/api/weather'
      );
      const weatherData = await response.json();

      setWeather(weatherData);
    }

    getWeather();
  }, []);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  );

  return (
    <>
      <h1>Recap Project 4</h1>
      <List activities={filteredActivities} weather={weather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
