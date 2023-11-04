import React from "react";

const LoadingPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-10 w-10 rounded-full border-4 border-blue-500 border-l-transparent animate-spin'></div>
    </div>
  );
};

export default LoadingPage;
