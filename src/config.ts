// utils/gettoken.ts

// Function to get the refresh token from localStorage
export default function getRefreshToken(): string | null {
    const token = localStorage.getItem('token');
    
    // Check if the refresh token is available and valid
    if (token !== undefined && token !== "" && token !== null) {
      return token;
    } else {
      return null; // Return null if the token is not available
    }
  }