// import React from 'react'
import HeaderNav from './HeaderNav'
import cookieImage from './cookie.jpg'; // Importa la imagen

export function Home() {
   return (
      <>
         <header className=''>
            <HeaderNav />
         </header>
         <main>
            <figure className=' bg-slate-800 overflow-hidden'>
               <img src={cookieImage} alt="cookie" className='  h-80 w-full object-cover'/>
               <div className=''>
                  <h1></h1>
               </div>
            </figure>
         </main>
      </>
   )
}
