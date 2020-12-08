import React, { useState } from "react";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="peopleBox">
        <h3>{people.length} birthday today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div key={id} className="personBox">
              <img src={image} alt={`${name}'s image`} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </div>
          );
        })}
        <button className="button" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
