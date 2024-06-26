import React, { useState } from 'react'
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import toast,{ Toaster } from 'react-hot-toast';
import Spinner from '../components/Spinner';
import { useRouter } from 'next/router';
import Head from 'next/head';
const Adminlogin = () => {
    const router = useRouter();
    const [show,setShow] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const handleChange=(e)=>{  
        if(e.target.name=="email"){
            setEmail(e.target.value);
        }
       else if(e.target.name=="password"){
            setPassword(e.target.value);
        }
    }
    const handleSubmit=async()=>{
        setLoading(true);
        const data = {email:email.toLowerCase(),password};

        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/adminlogin`, {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const response=await res.json();
          setLoading(false);
          if(response.success){
              toast.success(response.message);
              setEmail('');
              setPassword('');
              localStorage.setItem('innovateUadmin',JSON.stringify({token:response.token,email:response.email}));
              setTimeout(()=>{
                router.push('/admin')
                },2000)
          }
          else{
              toast.error(response.message);
          }
    }
  return (
    <div className='min-h-screen relative top-20'>
      <Head>
        <title>Admin Login | InnovateU</title>
        <meta name="description" content="Login to your admin account" />
        </Head>
        <Toaster position="top-center" reverseOrder={false}/>
      {loading?<div className='flex justify-center '><Spinner/></div>:<>
      
  {/* ========== MAIN CONTENT ========== */}
  <main
    id="content"
    role="main"
    className="relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto w-full h-full before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2"
  >
    <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
      <img src="https://res.cloudinary.com/dst73auvn/image/upload/v1698952130/2-removebg-preview_ljkree.png" alt="" className='w-20 sm:w-28 h-auto mx-auto mb-4 sm:mb-8'/>
      <h1 className="text-2xl text-white sm:text-4xl">
        Get access to our backend
      </h1>
      <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
        <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
          Admin Login
        </span>
      </h2>
      <div>
        <div className="mt-8 space-y-4">
         
          <div>
            <label
              htmlFor="hs-cover-with-gradient-form-email-1"
              className="sr-only"
            >
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                name='email'
                onChange={handleChange}
                value={email}
                id="hs-cover-with-gradient-form-email-1"
                className="py-3 ps-11 pe-4 block w-full bg-white/[.03] border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11"
                placeholder="Email address"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg
                  className="flex-shrink-0 h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="hs-cover-with-gradient-form-name-1"
              className="sr-only"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={`${show?"text":"password"}`}
                name='password'
                onChange={handleChange}
                value={password}
                id="hs-cover-with-gradient-form-name-1"
                className="py-3 ps-11 pe-4 block w-full bg-white/[.03] border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 start-0 flex items-center z-20 ps-4" >
 
                {!show&&<FaEye className="flex-shrink-0 h-4 w-4 text-gray-400" onClick={()=>{
                    setShow(!show);
                }}/>}
                {show&&<FaEyeSlash className="flex-shrink-0 h-4 w-4 text-gray-400" onClick={()=>{
                    setShow(!show);
                }}/>}
              </div>
            </div>
          </div>
          <div className="grid">
            <button
              type="submit"
              className="sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={handleSubmit}
            >
              Login Now
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

</>}

    </div>
  )
}

export default Adminlogin
