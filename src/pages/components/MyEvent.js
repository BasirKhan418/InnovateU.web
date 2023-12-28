import React from 'react'
import Link from 'next/link';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { IoTicket } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from 'framer-motion';
const MyEvent = () => {
  const [open,setOpen]=useState(false);
  const [width,setWidth]= useState(0);

  useEffect(()=>{
    var w = window.innerWidth;
   if(w>=500){
    setWidth(400);
   }
   else{
    setWidth(350);
   }
    
   },[])
   
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {width},
    bgcolor: 'background.paper',
    border: '2px solid purple',
    boxShadow: 50,
    borderRadius: "8px",
    p: 4,
  };

  const handleOpen=()=>{
    setOpen(true);
    
       }
       const handleClose=()=>{
        setOpen(false);
      }
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <style jsx>
{
  `
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@600&display=swap');
  .fontevent{
    font-family: 'Cabin', sans-serif;
  }
  `
}
          </style>
      <div className='  text-white rounded relative top-2  lg:bg-slate-900 bg-black my-8 h-[80vh] w-[90vw] '>
        <div className='flex flex-col justify-center items-center my-4 ]'>
        <h1 className='text-white fontevent lg:text-5xl md:text-4xl text-4xl'>My Events (1) </h1>
                  <div className='h-2 w-56 bg-purple-600 rounded-full my-4'></div>
        </div>
      
        <div className='flex flex-wrap item-center justify-center mx-4 my-4
       '>
        

    {/* component */}
    <div className="lg:flex shadow rounded-lg border  border-gray-400 bg-purple-300" onClick={handleOpen}>
    <div className="bg-purple-600 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">
      <div className="text-center tracking-wide">
        <div className="text-white font-bold text-4xl ">24</div>
        <div className="text-white font-normal text-2xl">Sept</div>
      </div>
    </div>
    <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
      <div className="flex flex-row lg:justify-start justify-center">
        <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
          <i className="far fa-clock" /> 1:30 PM
        </div>
        <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
          Organiser : IHC
        </div>
      </div>
      <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
        International Conference Dubai
      </div>
      <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
        A-142/1, A-142, Ganesh Nagar, Tilak Nagar, New Delhi, 110018
      </div>
    </div>
    <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
      <span className="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
        Going
      </span>
    </div>
  </div>
</div>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="Event Details"
  aria-describedby="Devcon 2024 Event Details"
>
  <Box sx={style}>
    <div className='absolute top-4 right-4 text-purple-600' onClick={handleClose}>
    <IoMdCloseCircle className='text-4xl'/>
    </div>
  <div className='flex justify-center items-center'>


<div className=" flex flex-col ">
  <ul className="list-none">
    <li className="rounded-lg group cursor-pointer">
      <div className="flex flex-row">
        <div className="items-center flex flex-col justify-around">
          <div className="border-l-2 h-full border-gray-400" />
          <div className="bg-purple-600 border-2 border-gray-400 rounded-full h-8 w-8 flex flex-grow justify-around ">
          <MdEventNote className='m-1 text-2xl text-white '/>
          </div>
          <div className="border-l-2 h-full border-gray-400" />
        </div>
        <div className="flex flex-col group-hover:bg-purple-300 ml-2 p-2 pr-6 rounded-xl">
          <div className="ml-4 text-xl font-medium">Registeration Started</div>
          <div className="ml-4 mb-2 text-xs">24 Oct 12:42 - 27 Oct 12:15</div>
          <div className="ml-4 text-sm">Checking Basic Details</div>
        </div>
      </div>
    </li>
    <li className="rounded-lg group cursor-pointer">
      <div className="flex flex-row">
        <div className="items-center flex flex-col justify-around">
          <div className="border-l-2 h-full border-gray-400" />
          <div className="bg-purple-600 border-2 border-gray-400 rounded-full h-8 w-8 flex flex-grow justify-around">
          <RiSecurePaymentFill className='m-1 text-2xl text-white '/>
          </div>
          <div className="border-l-2 h-full border-gray-400" />
        </div>
        <div className="flex flex-col group-hover:bg-purple-300 ml-2 p-2 pr-6 rounded-xl">
          <div className="ml-4 text-xl font-medium">
            Payment Processing
          </div>
          <div className="ml-4 mb-2 text-xs">24 Oct 12:42 - 27 Oct 12:15</div>
          <div className="ml-4 text-sm">Ticket Genrated</div>
        </div>
      </div>
    </li>
    <li className="rounded-lg group cursor-pointer">
      <div className="flex flex-row">
        <div className="items-center flex flex-col justify-around">
          <div className="border-l-2 h-full border-gray-400" />
          <div className="bg-purple-600 border-2 border-gray-400 rounded-full h-8 w-8 flex flex-grow justify-around">
           
          <IoTicket className='m-1 text-white text-2xl'/>
          </div>
          <div className="border-l-2 h-full border-gray-400" />
        </div>
        <div className="flex flex-col group-hover:bg-purple-300 ml-2 p-2 pr-6 rounded-xl">
          <div className="ml-4 text-xl font-medium">Successfully Registered</div>
          <div className="ml-4 mb-2 text-xs">24 Oct 12:42 - 27 Oct 12:15</div>
          <div className="ml-4 text-sm">Confirmation email send successfully</div>
        </div>
      </div>
    </li>
  </ul>
</div>
</div>
<div className='flex justify-center items-center my-2'>
<motion.button className='p-2 m-2 bg-purple-600 text-white fontevent rounded-md flex justify-center items-center' whileHover={{scale:1.1}} whileTap={{scale:0.9, rotate:1}}>Event Details <MdEventNote className='mx-1'/></motion.button>
<motion.button className='p-2 m-2 bg-purple-600 text-white fontevent rounded-md flex justify-center items-center' whileHover={{scale:1.1}} whileTap={{scale:0.9, rotate:1}}>View My Ticket<IoTicket className='mx-1'/></motion.button>
</div>
  </Box>
</Modal>


      </div>
      
    </div>
  )
}

export default MyEvent