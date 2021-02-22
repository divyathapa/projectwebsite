import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [birthdays, useBirthdays] = useState([
    {
      id: 1,
      months: "january",
      date: 24,
      name: "Shabanam",
      remember: false,
      year: 2021,
    },
    {
      id: 2,
      months: "february",
      date: 17,
      name: "Jyoti",
      remember: true,
      year: 2021,
    },
    {
      id: 3,
      months: "march",
      date: 17,
      name: "Suji",
      remember: false,
      year: 2021,
    },
  ]);
  return (
    <div className="App">
      <h1> Yearly Organiser {birthdays.year == 2020 ? "old" : 2021}</h1>
      <h2>Months</h2>
      <Header birthdays={birthdays} />

      <button>Add</button>
    </div>
  );
}

export default App;
