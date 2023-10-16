const URL_BASE = 'https://vuelos-backend.onrender.com/';
// const URL_BASE = 'http://localhost:3000/';

const endpoints = {
  user: (email, password) =>
    `${URL_BASE}users?email=${email}&&password=${password}`,
};

export default endpoints;
