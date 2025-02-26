import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
