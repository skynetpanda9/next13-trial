import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-blue-700 text-white px-4 py-4 border-b-4 border-white'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='text-center mb-2'>
          <Link className='text-xl font-bold text-white no-underline' href='/'>
            Akash Pandya
          </Link>
        </div>
        <div>
          <Link
            className='mx-2 text-white no-underline hover:underline'
            href='/about'
          >
            About
          </Link>
          <Link
            className='mx-2 text-white no-underline hover:underline'
            href='/about/team'
          >
            Our Team
          </Link>
          <Link
            className='mx-2 text-white no-underline hover:underline'
            href='/code/repos'
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
