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
  const [event,setEvent] = useState({});
  const[url,setUrl]= useState("");
  const fetchEventDetails=async(email)=>{
      const userdata = { email,estatus:"getdataviaemail"};
      console.log(userdata)
      const checkuser = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/eventr`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        }
      );
      const userresult = await checkuser.json();
  console.log(userresult)
      if(userresult.data!=null){
          setEvent(userresult.data);
          setUrl(userresult.url);
      }
      else{
      setEvent(null);
      }
  }
  useEffect(()=>{
    var w = window.innerWidth;
   if(w>=500){
    setWidth(400);
   }
   else{
    setWidth(350);
   }
   const data = JSON.parse(localStorage.getItem('innovateUuser')).email;
   fetchEventDetails(data);
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
      var rdate = new Date();
      var paydate=new Date();
      if(event!=null){
         rdate=new Date(event.createdAt);
         paydate= new Date(event.updatedAt);
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
      <div className='  text-white rounded relative top-10  lg:bg-slate-900 bg-black my-8 h-[100vh] w-[90vw] '>
        <div className='flex flex-col justify-center items-center my-4 '>
        <h1 className='text-white fontevent lg:text-5xl md:text-4xl text-4xl'>My Events (1) </h1>
                  <div className='h-2 w-56 bg-purple-600 rounded-full my-4'></div>
        </div>
      
       <div className='flex flex-wrap item-center justify-center mx-4 my-4
       '>
        

    {/* component */}
    {event==null?<div className='flex justify-center items-center'><div className="bg-white p-8 rounded-lg shadow-lg text-center w-4/5">
        <div className="animate-tickScale inline-block bg-green-600 rounded-full">
    
           <img src="/oops.jpg" alt="no data img" className="h-52 w-52"/>
        </div>
        
        <h1 className="lg:text-4xl md:text-4xl sm:text-2xl font-semibold text-gray-800 mb-4 font text-2xl">OOPS ! 🤭🤭🤭</h1>
        <p className="text-lg text-gray-600 mb-4 font"> You have not register for any event.</p>
        <p className="text-lg text-gray-600 mb-2 font">If you wish to see your ticket please register for an event. Ongoing event is<Link href={"/Event"}><span className='font-bold text-green-600'> DEVCON 2K24</span></Link>.</p>
        <Link href="/Event" className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full inline-block mx-2 my-4 ">Register for an Event </Link>
        <br/>
       
    </div></div>:<div className="lg:flex shadow rounded-lg border  border-gray-400 bg-purple-300" onClick={handleOpen}>
    <div className="bg-purple-600 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">
      <div className="text-center tracking-wide">
        <div className="text-white font-bold text-4xl ">15</div>
        <div className="text-white font-normal text-2xl">JAN</div>
      </div>
    </div>
    <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
      <div className="flex flex-row lg:justify-start justify-center">
        <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
          <i className="far fa-clock" /> 10:00 AM
        </div>
        <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
          Organiser : INNOVATEU
        </div>
      </div>
      <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
        DEVCON 2K24
      </div>
      <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
        CUTM Pkd Campus ,Ganesh Nagar, Tilak Nagar, 110018
      </div>
    </div>
    <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
      <span className="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
        Going
      </span>
    </div>
  </div>}
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
  {event==null?"":<div className='flex justify-center items-center'>


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
          <div className="ml-4 mb-2 text-xs">{rdate.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })},{rdate.getHours()}:{rdate.getMinutes()}</div>
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
          <div className="ml-4 mb-2 text-xs">{ paydate.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })},{paydate.getHours()}:{paydate.getMinutes()}</div>
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
          {event!=null&&<div className="ml-4 mb-2 text-xs">{ paydate.toLocaleDateString("en-IN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })},{paydate.getHours()}:{paydate.getMinutes()}</div>}
          <div className="ml-4 text-sm">Confirmation email send successfully</div>
        </div>
      </div>
    </li>
  </ul>
</div>
</div>}
{event==null?"":<div className='flex justify-center items-center my-2'>
  <Link href={`/components/Events/Eventconf?id=${event._id}`}>
<motion.button className='p-2 m-2 bg-purple-600 text-white fontevent rounded-md flex justify-center items-center' whileHover={{scale:1.1}} whileTap={{scale:0.9, rotate:1}}>Event Details <MdEventNote className='mx-1'/></motion.button>
</Link>
<Link href={"/components/MyTicket"}>
<motion.button className='p-2 m-2 bg-purple-600 text-white fontevent rounded-md flex justify-center items-center' whileHover={{scale:1.1}} whileTap={{scale:0.9, rotate:1}}>View My Ticket<IoTicket className='mx-1'/></motion.button>
</Link>
</div>}
  </Box>
</Modal>


      </div>
      
    </div>
  )
}

export default MyEvent
