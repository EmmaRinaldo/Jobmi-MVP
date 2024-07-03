import axios from 'axios';

const API_URL = "https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api";

export const registerUser = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  password: string;
  phone: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'inscription de l\'utilisateur:', error);
    throw error;
  }
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la connexion de l\'utilisateur:', error);
    throw error;
  }
};

export const subscribeToNewsletter = async (email: string) => {
    try {
      await axios.post(`${API_URL}/newsletter/subscribe`, { email });
    } catch (error) {
      console.error('Erreur lors de la souscription à la newsletter:', error);
      throw error;
    }
};
