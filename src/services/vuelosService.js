import axios from 'axios';
import endpoints from './endpoints';

export const getFlights = async () => {
  try {
    const { data } = await axios.get(endpoints.vuelos);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
