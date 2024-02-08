export default function List({ activities, weather }) {
  const { isGoodWeather, temperature, condition } = weather;
  return (
    <>
      <h2>
        {condition} {temperature} °C
      </h2>
      <p>
        {isGoodWeather
          ? 'The weather is awesome! Go outside and:'
          : "Bad weather outside! Here's what you can do now:"}
      </p>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </>
  );
}
