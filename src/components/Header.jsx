import React, { useState } from "react";
import '../index.css'
// import {Link} from 'react-router-dom'
export default function Header() {

    const [isDark, setIsDark] = useState(false);
    const [menu, setMenu] = useState(false);
    

    return (
        <div className=" grid grid-cols-12 h-20   z-50 " >
            <div className="col-span-4 md:col-span-2 text-center text-5xl p-6  text-slate-800 dark:text-yellow-100 cursor-pointer heroSection dark:bg-slate-800  ">
               <div className="hover:-rotate-3"> <span className="drop-shadow-md text-5xl p-4 text-center font-bold text-red-500">Yash</span></div>
            </div>
            <div className=" col-span-8 md:col-span-10 navbar ">

                <ul className="md:flex justify-start  hidden text-2xl p-5 navbar dark:text-white">
                    <li className="mx-3 text-slate-700 hover:text-black p-2 cursor-pointer hover:font-bold dark:hover:text-white transition drop-shadow-sm">
                        <a href='#home'>Home</a>
                    </li >
                    <li className="mx-3 text-slate-700 hover:text-black p-2 cursor-pointer hover:font-bold dark:hover:text-white transition drop-shadow-sm"><a href="#about">About</a></li>
                    <li className="mx-3 text-slate-700 hover:text-black p-2 cursor-pointer hover:font-bold dark:hover:text-white transition drop-shadow-sm"><a href="#services">Services</a></li>
                    
                    <li className="mx-3 text-slate-700 hover:text-black p-2 cursor-pointer hover:font-bold dark:hover:text-white transition drop-shadow-sm" ><a href="#projects">Projects</a></li>
                    <li className="mx-3 text-slate-700 hover:text-black p-2 cursor-pointer hover:font-bold dark:hover:text-white transition drop-shadow-sm"><a href="#contact">Contact</a></li>

                </ul>

                {/* dark mode  */}
                {isDark ?
                    <div className="absolute right-20 top-5 cursor-pointer dark:text-white text-xl" onClick={() => {
                        document.body.classList.remove("dark");
                        setIsDark(!isDark)
                    }}>
                        <svg className="text-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </div> : 
                    <div className="absolute right-20 top-5 cursor-pointer dark:text-white text-xl" onClick={() => {
                        document.body.classList.add("dark");
                        setIsDark(!isDark)
                    }}>

                    </div>}

                {menu ?
                    <div className="md:hidden absolute right-8 top-5 cursor-pointer dark:text-white" onClick={() => {
                        setMenu(!menu)
                    }}>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div> :
                    <div className="md:hidden absolute right-8 top-5 cursor-pointer dark:text-white" onClick={() => {
                        setMenu(!menu)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </div>}

                <div className={`absolute  right-8 ${menu ? "block" : "hidden"} md:hidden top-12 text-black bg-white rounded` }> 
                    <ul className="md:block   text-2xl p-2 navbar text-white ">
                        <li className=" text-black cursor-pointer hover:font-bold dark:hover:text-white px-24 py-3">
                            Home
                        </li >
                        <li className=" text-black cursor-pointer hover:font-bold  px-24 py-3">About</li>
                        <li className=" text-black cursor-pointer hover:font-bold  px-24 py-3">Services</li>

                        <li className=" text-black cursor-pointer hover:font-bold  px-24 py-3" >Projects</li>
                        <li className=" text-black cursor-pointer hover:font-bold  px-24 py-3">Contact</li>


                    </ul>
                </div>

            </div>
        </div>
    )
}