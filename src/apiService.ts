import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Set up base URL for your API
const BASE_URL = 'http://hooksmithb.neusec.in/';

// Create a helper function to get the JWT token from AsyncStorage
const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('jwt_token'); // Replace with your key
    return token ? `Bearer ${token}` : '';
  } catch (error) {
    console.error("Error fetching token", error);
    return '';
  }
};

// Function to make GET request
export const fetchData = async (url:string) => {
  const token = await getAuthToken();
  try {
    const response = await axios.get(`${BASE_URL}${url}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

// Function to make POST request
export const postData = async (url:string, data:any) => {
  const token = await getAuthToken();
  console.log(token)
  try {
    const response = await axios.post(`${BASE_URL}${url}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data", error);
    throw error;
  }
};

// Function to make PUT request
export const updateData = async (url:string, data:any) => {
  const token = await getAuthToken();
  try {
    const response = await axios.put(`${BASE_URL}${url}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data", error);
    throw error;
  }
};

// Function to make DELETE request
export const deleteData = async (url:string) => {
  const token = await getAuthToken();
  try {
    const response = await axios.delete(`${BASE_URL}${url}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting data", error);
    throw error;
  }
};
