export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.elements.name.value;
    const isForGoodWeather = form.elements.isGoodWeather.checked;

    onAddActivity({ name, isForGoodWeather });

    form.reset();
    form.elements[0].focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" />
      </div>
      <div>
        <label htmlFor="isGoodWeather">Good-weather activity:</label>
        <input id="isGoodWeather" type="checkbox" name="isGoodWeather" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
