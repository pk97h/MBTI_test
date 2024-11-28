import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (userData, token) => {
  if (!token) {
    throw new Error('No token found');
  }
  
  const response = await axios.patch('https://moneyfulpublicpolicy.co.kr/profile', userData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  
  return response.data;
};