// Auth.js
import axios from 'axios';

// Function to generate a random token
const getToken = () => {
  const tokenL = 10;
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < tokenL; i++) {
    const random = Math.floor(Math.random() * char.length);
    token += char.charAt(random);
  }
  return token;
};

// Login function
export const login = async (email, password) => {
  try {
    const response = await axios.get('https://6557461bbd4bcef8b6125d04.mockapi.io/RegisterUser');
    const user = response.data.find((user) => user.email === email);
    if (user && user.password === password) {
      // Assuming the response contains user data
      const userData = {
        id: user.id,
        email: user.email,
        // Add other user properties as needed
      };

      localStorage.setItem('token', getToken());
      localStorage.setItem('user', JSON.stringify(userData));

      return userData;
    } else {
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

// Logout function with user parameter
export const logout = async (user) => {
  try {
    // Add API request to save user data before logout
    await axios.post('https://6557461bbd4bcef8b6125d04.mockapi.io/RegisterUser', { userId: user.id });

    // Clear local storage or state after saving user data
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Your existing logout logic
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
};

// Function to check if the user is authenticated
export const isAuth = () => {
  return !!localStorage.getItem('token');
};
