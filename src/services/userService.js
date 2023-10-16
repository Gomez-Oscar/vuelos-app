import axios from 'axios';
import endpoints from './endpoints';

const getUserByEmailAndPassword = async (email, password) => {
  try {
    const { data } = await axios.get(endpoints.user(email, password));
    return data.length ? data[0] : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getUserByEmailAndPassword;
