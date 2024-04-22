import React, { useState, useEffect } from 'react';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('/api/v1/pets')
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  return (
    <div>
      <h1>Pet Finder</h1>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            {pet.name} - Owner: {pet.owner}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;