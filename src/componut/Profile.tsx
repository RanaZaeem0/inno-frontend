// Profile.tsx
import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import ProfileAvatar from "./layout/ProfileAvatar";
import useGetuserProfile from "../hook/useGetuserProfile";
import useGetUserBlog from "../hook/useGetUserBlog";
import { Skeleton } from "@mui/material";
import ProfileSekleton from "./ProfileSekleton";
import Skaleton from "./Skaleton";

const Profile: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [showEditBtn, setShowEditBtn] = useState(false);
  const navigate = useNavigate()
  const userId = searchParams.get("userId");
  const { userProfile, isProfileLoading } = useGetuserProfile();
  const { userBlog, isBlogLoading } = useGetUserBlog();
  console.log(userProfile,userBlog);

 

  const localUserId = localStorage.getItem("userId");

  return (
    <div>
      {!isProfileLoading ? (
        <ProfileAvatar
          username={userProfile?.username}
          userId={userProfile.id}
          showEditbtn={showEditBtn}
        />
      ) : (
        <div>
          <ProfileSekleton />
        </div>
      )}
      {!isBlogLoading ? (
        <div className="">
          {(!userBlog || userBlog.length === 0 )? (
            <h1>You Have no BLog yet 
              {localUserId == userProfile?.id && <button
         onClick={()=>navigate('/addblog')}
            className="text-white bg-green-500 p-2  m-3 rounded-2xl px-4 lg:ml-80 font-medium "
          >
            Publish Blogs
          </button>}
               </h1>
          ) : (
            userBlog.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center"
              >
                <NavLink
                  to={`/readblog?id=${item.id}&name=${item.author.username}`}
                  className="w-1/2"
                >
                  <div className="flex items-center justify-center mt-10">
                    <div className="flex w-full border rounded-lg flex-col justify-center items-start px-6">
                      <h2 className="text-2xl font-bold py-4">{item.title}</h2>
                      <Avatar
                        username={item.author.username}
                        createdAt={item.createdAt}
                        userId={item.author.id}
                      />
                      <h2 className="text-1xl py-4">
                        {item.content.slice(0, 200)} ...
                      </h2>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
          )}
        </div>
      ) : (
        <div>
          <Skaleton/>
        </div>
      )}
    </div>
  );
};

export default Profile;
