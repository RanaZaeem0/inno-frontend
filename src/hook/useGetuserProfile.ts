// useGetuserProfile.ts
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Define the ProfilePost interface outside the hook
export interface ProfilePost {
  id: string;
  email: string;
  username: string;
 
}

const useGetuserProfile = () => {
  const [userProfile, setUserProfile] = useState<ProfilePost | undefined>(undefined); // Updated to array type
  const [isProfileLoading, setIsProfileLoading] = useState<boolean>(true);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}user/profile?userId=${userId}`);
          if (response.status >= 200 && response.status < 300) {
            setUserProfile(response.data.response); // Assume this returns an array of ProfilePost
          }
        } catch (error) {
          console.error(`Error fetching profile: ${error}`);
        } finally {
          setIsProfileLoading(false);
        }
      }
    };

    fetchProfile();
  }, []);

  return {
    userProfile,
    isProfileLoading
  };
}

export default useGetuserProfile;
