import React, { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const AllMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data);
        setMembers(data?.data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-xl font-bold drop-shadow-lg">All Members</h1>

      {members.length !==0 ? (
        <table className="w-full mt-4 text-sm text-left text-gray-500 py-4 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Member Image
              </th>
              <th scope="col" className="px-6 py-3">
                Member Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Social Media
              </th>
            
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              return (
                <tr key={member?._id} className="bg-white border-b ">
                  <th className="flex items-center py-2 justify-center">
                    <img className="w-16 h-16 rounded-full ring-2" src={member.image} alt="" />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white"
                  >
                    {member.name}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap dark:text-white "
                  >
                    {member.position}
                  </th>
                  <th className="px-6 ">
                    <div className="flex items-center gap-3 ">
                    <a href={member.facebook} target="blank" className="text-lg text-black hover:text-cyan-500 transition-colors">
                    <BsFacebook></BsFacebook>
                    </a>
                    <a href={member.linkedin} target="blank" className="text-lg text-black hover:text-cyan-500 transition-colors">
                    <BsLinkedin></BsLinkedin>
                    </a>
                    <a href={member.linkedin} target="blank" className="text-lg text-black hover:text-cyan-500 transition-colors">
                    <BsInstagram></BsInstagram>
                    </a>
                </div>
                  
                  </th>
                  <th className="">
                    <div className="flex items-center gap-3">
                    <button className="bg-cyan-500 rounded-full p-1 px-4 text-white font-normal">Edit</button>
                    <button className="bg-red-500 py-1 px-2 rounded-full text-white font-normal">Delete</button>
                    </div>
                  </th>
                  <th className="">
                  
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="mt-5">
          <h1>No member availabe</h1>
        </div>
      )}
    </div>
  );
};

export default AllMembers;
