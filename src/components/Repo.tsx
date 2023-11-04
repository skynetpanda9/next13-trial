import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
interface props {
  name: string;
}

const fetchRepo = async (name: string) => {
  const res = await fetch(`https://api.github.com/repos/skynetpanda9/${name}`, {
    next: { revalidate: 60 },
  });
  const repo = await res.json();
  return repo;
};

const Repo = async ({ name }: props) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2 className='text-xl font-semibold mt-0'>{repo.name}</h2>
      <p className='text-base font-normal mt-2'>{repo.description}</p>
      <div className='flex mt-4'>
        <div className='flex items-center mr-4'>
          <FaStar className='mr-2' />{" "}
          <span className='text-sm'> {repo.stargazers_count}</span>
        </div>
        <div className='flex items-center mr-4'>
          <FaCodeBranch className='mr-2' />{" "}
          <span className='text-sm'> {repo.forks_count}</span>
        </div>
        <div className='flex items-center mr-4'>
          <FaEye className='mr-2' />{" "}
          <span className='text-sm'> {repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
