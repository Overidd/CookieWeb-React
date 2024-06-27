import { Menu, ShoppingCart } from 'lucide-react'

const NavBar = () => {
   return (
      <nav className='flex gap-2 justify-between  px-3 py-3 items-center'>

         <Menu color="#067f1a" className='block md:hidden' />
         <p className='text-green-700 text-xl md:text-3xl  hidden md:block'>Menu</p>
         <p className='text-yellow-300 text-2xl md:text-5xl'>
            Little <span className='text-green-700 text-2xl md:text-5xl'>Lemmon</span>
         </p>

         <div className='flex gap-1'>
            <p className='text-green-700 font-thin text-md md:text-lg'>
               Login
            </p>
            <ShoppingCart color="#067f1a" className='text-5xl md:text-5xl' />
         </div>
      </nav>
   )
}

export default NavBar
