import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const res = await fetch("https://api.github.com/users/skynetpanda9/repos", {
    next: { revalidate: 60 },
  }); //for fetching or caching data after every interval

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await res.json();
  return repos;
}

const Repos = async () => {
  const repos = await fetchRepos();
  return (
    <div className='max-w-3xl mx-auto py-8'>
      <h1 className='text-2xl font-semibold mb-8'>Repos</h1>
      <ul className='list-none p-0'>
        {repos.map((repo: any) => (
          <li
            key={repo.id}
            className='border-b border-gray-200 py-4 hover:bg-blue-600 rounded-xl hover:p-4 hover:shadow-lg group mb-4'
          >
            <Link href={`/code/repos/${repo.name}`}>
              <h3 className='text-xl font-semibold group-hover:text-gray-200'>
                {repo.name}
              </h3>
              <p className=' text-lg text-gray-600 mt-0 group-hover:text-gray-200'>
                {repo.description}
              </p>
              <div className='flex justify-between mt-4 text-gray-500 group-hover:text-gray-300'>
                <span className='flex items-center'>
                  <FaStar className='mr-2' /> {repo.stargazers_count}
                </span>
                <span className='flex items-center'>
                  <FaCodeBranch className='mr-2' /> {repo.forks_count}
                </span>
                <span className='flex items-center'>
                  <FaEye className='mr-2' /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
