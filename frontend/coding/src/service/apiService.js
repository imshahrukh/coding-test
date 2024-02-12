// services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Update this with your API base URL

export const fetchMessages = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages/getAllMessages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

export const fetchUsers = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/getAllUsers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
