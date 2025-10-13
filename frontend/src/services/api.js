import axios from 'axios';

// Create an axios instance with default configuration
const api = axios.create({
  baseURL: 'http://localhost:8000/news/api', // Django backend URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// API functions
export const fetchAllNews = async () => {
  try {
    const response = await api.get('/news/');
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await api.get(`/news/category/${category}/`);
    return response.data.articles;
  } catch (error) {
    console.error(`Error fetching news for category ${category}:`, error);
    throw error;
  }
};

export default api;