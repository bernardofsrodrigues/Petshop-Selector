import React, { useState } from 'react';
import { findBestPetshop } from '../services/petshopService';

function PetshopForm() {
  const [date, setDate] = useState('');
  const [smallDogs, setSmallDogs] = useState(0);
  const [largeDogs, setLargeDogs] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await findBestPetshop(date, smallDogs, largeDogs);
    setResult(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data: </label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Quantidade de Cães Pequenos: </label>
          <input type="number" value={smallDogs} onChange={(e) => setSmallDogs(e.target.value)} required />
        </div>
        <div>
          <label>Quantidade de Cães Grandes: </label>
          <input type="number" value={largeDogs} onChange={(e) => setLargeDogs(e.target.value)} required />
        </div>
        <button type="submit">Encontrar Melhor Petshop</button>
      </form>
      {result && (
        <div>
          <h2>Melhor Petshop: {result.petshop}</h2>
          <p>Preço Total: R${result.price}</p>
        </div>
      )}
    </div>
  );
}

export default PetshopForm;
