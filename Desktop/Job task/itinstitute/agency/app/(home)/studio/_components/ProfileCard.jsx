import Image from 'next/image'
import React from 'react'

function ProfileCard({ teams }) {
  return (
    <div>
      <div className="w-full h-[400px] overflow-hidden">
        <Image
          src={teams?.photo}
          alt={teams.name}
          className="filter grayscale bg-center bg-cover w-full h-full object-contain"
        />
      </div>
      <h1 className="font-medium text-xl mt-6 text-center">{teams?.name}</h1>
      <p className='mt-4 text-neutral-600 text-center'>{teams?.position}</p>
    </div>
  );
}

export default ProfileCard