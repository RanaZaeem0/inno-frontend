import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
export default function ProfileAvatar({
  username = "Jhon",
  showEditbtn = false,
}: {
  username: string | undefined;
  showEditbtn: boolean;
}) {
  const Navigate = useNavigate();

  return (
    <div>
      <div className=" relative flex items-center justify-center flex-col ">
        <div className="w-2/3 h-56 border-b bg-white "></div>
        <div className="absolute bottom-0   flex items-center m-2 w-1/2  justify-start ">
          <div className=" inline-flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-700 text-white text-4xl rounded-full dark:bg-gray-600 ">
            <span className="font-medium text-white dark:text-gray-300">
              {username.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* <h3>{format(new Date(, 'MMM d, yyyy')

}</h3> */}
          <div className="flex items-center justify-between w-full">
            <h2 className="font-semibold text-black text-4xl text-center pl-2">
              {username}
            </h2>
            {showEditbtn ? (
              <button
                className="flex items-center gap-2  justify-end w-full"
                onClick={() => Navigate("/userupdate")}
              >
                Edit <FontAwesomeIcon className="h-5" icon={faUserPen} />{" "}
              </button>
            ) : null}
            {!showEditbtn ? (
              <button
                type="button"
                className="text-white cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Follow
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
