import React from 'react'
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/7eabab43-177b-4664-8f88-6cd41e840ab9/TH-th-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_2928035d-3642-4bf6-b3d8-0c178dff0a44_medium.jpg"
          alt="/"
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
    </div>
    <SavedShows />  
    </>
  );
};
export default Account;