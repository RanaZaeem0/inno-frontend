import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComments } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
const Dropdown = ({ authorId, blogId }:{
  authorId?:string,
  blogId?:string
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const Navigate = useNavigate()
  const [error, setError] = useState('')

  const userId = localStorage.getItem('userId')
  useEffect(() => {
    if (authorId == userId) {
      setShowEdit(true)
    }
  }, [])


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleDeleteBtn = async () => {
    try {
      const token = localStorage.getItem('token')
      console.log(token);

      const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}post/blog/delete?id=${blogId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        Navigate("/allblog");
      }

      
    } catch (error) {
    console.log("S");
    }
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faBars} />

        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          
        >

          {showEdit ?
            <div className="py-1" role="none">
              <a
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                
                id="menu-item-0"
              >

                <button onClick={
                  () => Navigate(`/updateblog?id=${blogId}`)
                }>Edit</button>

              </a>
            </div>
            : null}

          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              
              id="menu-item-4"
            >
              Share
            </a>
            {showEdit ?
              <div className="py-1" role="none">
                <a
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  
                  id="menu-item-0"
                >

                  <button onClick={handleDeleteBtn}>Delete</button>

                </a>
              </div>
              : null}
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              
              id="menu-item-5"
            >
              Add to favorites
            </a>
          </div>

        </div>
      )}
    </div>
  );
};

export default Dropdown;
