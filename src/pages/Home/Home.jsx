// import React from 'react'
import NavBar from '../../components/navBar/menu'
import CustonCarousel from '../../components/slaiders/Carousel'
import { Button } from '../../components/buttons/Button'
import Categoria from '../../components/contents/Categoria'

const imgCarousel = [
   {
      src: '/src/assets/dessert1.jpg',
      alt: 'Postre 1',
      titulo: 'Titulo 1',
      descripcion: 'Descripcion 1',
   },
   {
      src: '/src/assets/dessert2.jpg',
      alt: 'Postre 2',
      titulo: 'Titulo 2',
      descripcion: 'Descripcion 2',
   },
   {
      src: '/src/assets/dessert3.jpg',
      alt: 'Postre 3',
      titulo: 'Titulo 3',
      descripcion: 'Descripcion 3',
   },
   {
      src: '/src/assets/dessert2.jpg',
      alt: 'Postre 4',
      titulo: 'Titulo 4',
      descripcion: 'Descripcion 4',
   },
   {
      src: '/src/assets/dessert1.jpg',
      alt: 'Postre 5',
      titulo: 'Titulo 5',
      descripcion: 'Descripcion 5',
   }
]

const categorias = [
   {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ',
      src: '',
      alt: 'categoria 1',
   },
   {
      text: 'Voluptas atque aliquam tenetur quas commodi. Fugiat neque, nesciunt voluptates rem perferendis nam ex, aut ',
      src: '',
      alt: 'categoria 2',
   },
   {
      text: ' consectetur Voluptas atque aliquam tenetur quas commodi. Fugi',
      src: '',
      alt: 'categoria 3',
   },
]
export const Home = () => {
   return (
      <>
         <header className='flex flex-col max-w-[55rem] m-auto'>
            <NavBar />

            <CustonCarousel
               carousel={imgCarousel}
               className='rounded-xl md:rounded-2xl overflow-hidden m-auto'
               boton={<Button text='Comprar' />} 
               />

         </header>

         <main className='mt-8 max-w-[55rem] m-auto space-y-6'>
            <section className='flex justify-between'>
               <Button text='Veg' />
               <Button text='Meat' />
               <Button text='Asian' />
            </section>
            <section className='space-y-4'>

               {
                  categorias.map(item => (
                     <Categoria text={item.text} src={item.src} alt={item.alt} key={item.alt}/>
                  ))
               }
            </section>
         </main>
      </>
   )
}

