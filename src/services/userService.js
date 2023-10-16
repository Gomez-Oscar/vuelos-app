import axios from 'axios';
import endpoints from './endpoints';

export const createUser = async user => {
  try {
    const { data } = await axios.post(endpoints.users, user);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserByEmailAndPassword = async (email, password) => {
  try {
    const { data } = await axios.get(endpoints.user(email, password));
    return data.length ? data[0] : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
