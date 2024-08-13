// useGetuserBlog.ts
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Define the BlogPost interface outside the hook
export interface BlogPost {
  author: { username: string; id: string };
  id: string;
  authorId: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string; // Use Date if you plan to parse this to a Date object
}

const useGetUserBlog = () => {
  const [userBlog, setUserBlog] = useState<BlogPost[] | undefined>(undefined); // Updated to array type
  const [isBlogLoading, setIsBlogLoading] = useState<boolean>(true);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  useEffect(() => {
    const fetchBlog = async () => {
      if (userId) {
        try {
            console.log(userId);
            
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}post/profile?userId=${userId}`);
          if (response.status >= 200 && response.status < 300) {
            setUserBlog(response.data.response); // Assume this returns an array of BlogPost
          }
        } catch (error) {
          console.error(`Error fetching Blog: ${error}`);
        } finally {
          setIsBlogLoading(false);
        }
      }
    };

    fetchBlog();
  }, [userId]);

  return {
    userBlog,
    isBlogLoading
  };
}

export default useGetUserBlog;
