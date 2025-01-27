import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from 'react-hot-toast';

export const Appbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = async () => {
        const loadingToast = toast.loading('Logging out...');
        try {
            await axios.post(`${BACKEND_URL}/api/v1/user/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            toast.dismiss(loadingToast);
            toast.success('Logged out successfully');
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            navigate('/signin');
        } catch (e) {
            toast.dismiss(loadingToast);
            toast.error('Error logging out, but you have been logged out locally');
            // Still remove the token and redirect even if the server request fails
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            navigate('/signin');
        }
    };

  return (
    <div  className="border-b border-black flex flex-wrap justify-between items-center px-4 py-4">
      <Link to={'/'} className="flex flex-col text-2xl justify-center cursor-pointer">
        ScribbleSphere
      </Link>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Link className="hidden md:inline-flex" to={"/my-story"}>
          <button type="button" className="px-4 py-2 rounded-full text-sm md:text-base font-light hover:bg-gray-100">
            Our Story
          </button>
        </Link>
        <Link to={"/publish"} className="hidden md:inline-flex">
          <button type="button" className="px-4 py-2 rounded-full text-sm md:text-base font-light hover:bg-gray-100">
            Write
          </button>
        </Link>
        {!isLoggedIn && (
          <Link to={"/signin"} className="hidden sm:inline-flex">
            <button type="button" className="px-4 py-2 rounded-full text-sm md:text-base font-light hover:bg-gray-100">
              Sign in
            </button>
          </Link>
        )}
        {isLoggedIn ? (
          <>
            <Link to={"/blogs"}>
              <button type="button" className="bg-black text-white px-4 py-2 rounded-full text-sm md:text-base font-light hover:bg-gray-800">
                Get started
              </button>
            </Link>
            <button
              onClick={handleLogout}
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-full text-sm md:text-base font-light hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to={"/signup"}>
            <button type="button" className="bg-black text-white px-4 py-2 rounded-full text-sm md:text-base font-light hover:bg-gray-800">
              Get started
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}