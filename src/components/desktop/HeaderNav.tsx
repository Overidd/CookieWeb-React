// import React from 'react'
import { Link, useLocation } from 'wouter'
export default function HeaderNav() {

   const [location, setLocation] = useLocation();
   console.log(location)
   return (
      <>
         <nav className='flex gap-3 justify-center bg-[#48b] text-white p-4 relative items-center'>
            <a onClick={() => setLocation("/")}>LOGO</a>
            <div className='flex flex-col absolute bg-[#48b] left-0 right-0 top-[100%] p-5 gap-3  md:flex-row md:static'>
               <Link href="/">Home</Link>
               <Link href="/detalle">Detalle</Link>
               <Link href="/formularios">Formularios</Link>
            </div>
            <button className='md:hidden'>=</button>
         </nav>

      </>
   )
}
