import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';
import Rabbani from '../assets/portfolio/golam rabbani.jpg'
const Team = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/team")
        .then((res) => res.json())
        .then((data) => {
          console.log(data?.data);
          setMembers(data?.data);
        });
    },[])
    return (
        <div className=' my-10 md:px-20 px-6 '>
            <h1 className='text-center text-3xl md:text-4xl font-bold my-10'>Our Team Members</h1>

            <div className='grid md:grid-cols-3 gap-8'>
                {
                    members?.map(member=><TeamCard key={member?._id} team={member}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;