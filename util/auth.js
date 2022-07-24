import axios from "axios";

const API_KEY = 'AIzaSyBwzHbrQVqXSiFOz-QSr-M9Bz65dkIl97w';

export const createUser = async (email, password) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );



};
