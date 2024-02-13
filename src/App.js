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

  function handleDeleteActivity(activityId) {
    setActivities(activities.filter((activity) => activityId !== activity.id));
  }

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        'https://example-apis.vercel.app/api/weather'
      );
      const weatherData = await response.json();

      setWeather(weatherData);
    }

    const intervalID = setInterval(() => {
      getWeather();
    }, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  );

  return (
    <>
      <h1>Recap Project 4</h1>
      <List
        activities={filteredActivities}
        weather={weather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
