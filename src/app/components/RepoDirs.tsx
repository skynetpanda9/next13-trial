import Link from "next/link";
import React from "react";
interface props {
  name: string;
}

const fetchRepoContents = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(
    `https://api.github.com/repos/skynetpanda9/${name}/contents/`,
    {
      next: { revalidate: 60 },
    }
  );
  const contents = await res.json();
  return contents;
};

const RepoDirs = async ({ name }: props) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content: any) => content.type === "dir");

  return (
    <>
      <h3 className='text-lg font-medium mt-4 text-green-600'>Directories</h3>
      <ul className='list-disc ml-6'>
        {dirs.map((dir: any) => (
          <li className='hover:text-blue-500' key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
