import React, { useState } from 'react';
import convertBase64 from '../../../Utilities/Utils';

const AddMember = () => {
    const [image, setImage] = useState();

    const handleImageUpload = async(e) => {
        const img = await convertBase64(e?.target.files[0]);
        setImage(img);
    }

    const handlePostTeam = (e) => {
        e.preventDefault();
        const name = e.target.membername.value;
        const position = e.target.position.value;
        const tagline = e.target.tagline.value;
        const facebook = e.target.facebook.value;
        const instagram = e.target.instagram.value;
        const linkedin = e.target.linkedin.value;

        const memberDetails = { name, image, position, tagline, facebook, instagram, linkedin };

        try {
            fetch('http://localhost:5000/team', {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify(memberDetails)
            }).then(res => res.json())
                .then(data => {
                    console.log(data.data);
                    e.target.reset();
                    setImage("")
            })
        } catch (error) {
            console.log(error.message);
        }


    }
    return (
        <div>
            <h1 className='text-xl font-bold drop-shadow-lg'>Add Member</h1>
            <div className='my-8'>
                <form onSubmit={handlePostTeam}>
                    <div className='w-44 border-2 rounded-lg border-gray-800 h-44 flex items-center justify-center overflow-hidden '>
                        {
                            image ? <img className='w-full h-full object-cover' src={image} alt="" /> : <div className=' relative w-full flex-col h-full flex' >
                                <input className='w-full bg-transparent p-4 cursor-pointer opacity-0 z-30 h-full' type="file" onChange={handleImageUpload} required name="" id="" /> 
                                <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full z-10 bg-transparent'>
                                <p className='font-semibold'>Upload Photo</p>
                                </div>
                            </div>

                        }
                    </div>
                    <div className='flex gap-10 mt-5'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3 items-center'>
                            <label htmlFor="" className='font-semibold'>Member Name:</label>
                            <input name='membername' type="text" required placeholder='Enter Member Name' className='p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none'/>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <label htmlFor="" className='font-semibold'>Position Name:</label>
                            <input name='position' type="text" required placeholder='Which Position He/She Works?' className='p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none'/>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <label htmlFor="" className='font-semibold'>Short Tagline:</label>
                            <textarea name='tagline' type="text" required  placeholder='Short Tagline' className='p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none resize-none'/>
                        </div>
                     
                        </div>
                        <div className='flex flex-col gap-4'>
                        <div className='flex gap-3 items-center'>
                            <label htmlFor="" className='font-semibold'>Facebook Link:</label>
                            <input name='facebook' type="text" required  placeholder='Facebook Link' className='p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none'/>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <label htmlFor="" className='font-semibold'>Instagram Link:</label>
                            <input name='instagram' type="text" required  placeholder='Instagram Link' className='p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none'/>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <label htmlFor="" className='font-semibold'>Linkedin Link:</label>
                            <input name='linkedin' type="text" required placeholder='Linkedin Link' className='p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none' />
                        </div>
                        </div>  
                    </div>
                    <div className='w-44 bg-cyan-500 rounded-md flex items-center justify-center font-semibold text-white mt-5'>
                        <button className='w-full p-3'>Submit</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default AddMember;

// function convertBase64(file) {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };
//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   }