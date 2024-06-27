import React from 'react'


interface Props {
   titulo: string,
   descripcion: string,
   boton: React.JSX.Element,
   src: string,
   alt: string,
}

export default function CarouseInfo({ titulo, descripcion, boton, src, alt }: Props) {
   return (
      <div className='relative basis-0 min-w-[100%] h-full'>
         <div className='absolute inset-0  flex justify-center gap-10 flex-col pl-14 text-white bg-[#0004] '>
            <h3 className='text-3xl md:text-5xl font-bold drop-shadow-xl'>
               {titulo}
            </h3>
            <p className='font-bold text-sm md:text-xl'>
               {descripcion}
            </p>
            {boton}
         </div>
         <img src={src} alt={alt} className={`object-cover w-full h-full`}/>
      </div>
   )
}
