import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const findBestPetshop = async (date, smallDogs, largeDogs) => {
  const response = await axios.post(`${API_URL}/best-petshop`, {
    date,
    smallDogs,
    largeDogs
  });
  return response.data;
};
