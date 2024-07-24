import axios from "axios";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../store/authSlice";
import Input from "./Input";
import Button from "./Button";

export default function UserUpdate() {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const handelupdateData = async (data:{
    username?: string;
    password?: string;
  }) => {
    try {
      const blogData = data;
      console.log(blogData, "sa");
      const token: string | null = localStorage.getItem("token");
      console.log(token);

      const response = await axios.put(
        "http://localhost:3000/api/user/userupdate",
        blogData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("username", response.data.username);

        console.log(response.data);
        
        console.log(localStorage.getItem("jwt"));
        Dispatch(login(response.data));
        Navigate("/profile");
      }
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log(
          `Error response from server: ${error.response.status} - ${error.response.data}`
        );
        setError(`Error: ${error.response.data.message || "Server Error"}`);
      } else if (error.request) {
        // No response received from server
        console.log("No response received from server", error.request);
        setError("No response received from server. Please try again later.");
      } else {
        // Other errors
        console.log(`Error during signup: ${error.message}`);
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="bg-slate-800 h-screen flex justify-center ">
      <div className="flex w-screen justify-center">
        <div className="bg-white h-full w-11/12 max-lg:w-full  text-center flex items-center justify-center flex-col ">
          <h2 className="text-black font-semibold">
            Update your user details{" "}
          </h2>
          <h2>Enter your info</h2>
          <form onSubmit={handleSubmit(handelupdateData)}>
            <div className="flex flex-col max-lg:w-full items-center justify-center w-96">
              <Input
                {...register("username")}
                type={"text"}
                placeholder={"new username"}
                label={"Enter your new username"}
              />
              <Input
                {...register("password", { minLength: 6 })}
                placeholder={"new password"}
                label={"new password"}
              />
              <Button
                label={"Update"}
                type="submit"
                className={"bg-gray-800"}
              />
            </div>

            <h2 className="text-red-500 font-normal">{error}</h2>
          </form>
        </div>
      </div>
    </div>
  );
}
