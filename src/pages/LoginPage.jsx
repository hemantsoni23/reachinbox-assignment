import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import LogoBar from '../components/LogoBar';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = () => {
    const redirect_uri = 'https://reachinbox-assignment-hemantsoni.vercel.app/login';
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${redirect_uri}`;
  };

  return (
    <div className='bg-black text-white w-screen h-screen flex flex-col justify-center items-center dark:bg-white dark:text-black'>
      <LogoBar />
      <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40] dark:bg-gray-100 dark:border-gray-300">
        <div>
          <div className="text-xl font-semibold mt-6 dark:text-black">Create a new account</div>
          <div
            className="flex items-center mt-6 border-white/40 border rounded-lg cursor-pointer px-20 py-2 text-sm text-[#CCCCCC] dark:border-gray-300 dark:text-gray-700"
            onClick={handleLogin}
          >
            <FcGoogle className="w-4 mr-3" />
            Sign Up with Google
          </div>
        </div>
        <div>
          <Link
            to="/login"
            className="text-sm py-3 rounded-md cursor-pointer bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 dark:text-white"
          >
            Create an Account
          </Link>
          <div className="my-8 mb-10 text-[#909296] dark:text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-[#C1C2C5] dark:text-gray-800">
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] dark:bg-gray-200 flex justify-center items-center text-sm bottom-0 fixed w-screen h-8 text-[#5C5F66] dark:text-gray-600">
        &#169; 2023 Reachinbox. All rights reserved.
      </div>
    </div>
  );
};

export default LoginPage;
