import React from 'react'

interface Props{
  text: string,
}

export const Button = ({text}:Props) => {
  return (
    <button className='bg-green-600 px-5 py-2 w-fit rounded-xl cursor-pointer text-white'>
      {text}
    </button>
  )
}


