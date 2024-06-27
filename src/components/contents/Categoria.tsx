import React from 'react'
interface Props {
   text: string,
   src: string,
   alt: string,
}


export default function Categoria({ text,src,alt}: Props) {
   return (
      <div className='flex border border-gray-700 p-4'>
         <img src={src} alt={alt} className='basis-[40%]'/>
         <p className='flex-1'>{text}</p>
      </div>
   )
}
