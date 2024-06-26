// import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'wouter'
export default function HeaderNav() {
   const [menuOpen, setMenuOpen] = useState(false)
   const [location, setLocation] = useLocation();
   console.log(location)

   const menuBurger = () => {
      setMenuOpen(!menuOpen)
   }

   return (
      <header>
         <nav className='flex gap-3 justify-between bg-[#48b] text-white p-4 relative items-center'>
            <a onClick={() => setLocation("/")}>LOGO</a>

            <div className={`flex flex-col absolute bg-[#48b] left-0 right-0 top-[100%] p-5 gap-3  md:flex-row md:static md:flex ${menuOpen ? '' : 'hidden'}`}>
               <Link href="/">Home</Link>
               <Link href="/detalle">Detalle</Link>
               <Link href="/formularios">Formularios</Link>
            </div>

            <button className='md:hidden select-none' onClick={menuBurger}>=</button>
         </nav>

      </header>
   )
}
