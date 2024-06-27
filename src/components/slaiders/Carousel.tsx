import React from 'react'
import { Carousel } from 'nuka-carousel'
import CarouseInfo from './CarouseInfo'

interface CarouselProps {
   src: string,
   alt: string,
   titulo: string,
   descripcion: string,
}

interface Props {
   carousel: CarouselProps[],
   className?: string,
   boton?: React.JSX.Element,
}

export default function CustonCarousel({ carousel, boton, className, }: Props) {
   return (
      <Carousel autoplay  wrapMode="wrap" className={className}>
         {
            carousel.map((item) => (
               <CarouseInfo
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  boton={boton!}
                  src={item.src}
                  alt={item.alt}/>
               // <img src={item.src} alt={item.alt}/>
            ))
         }
      </Carousel>

   )
}
