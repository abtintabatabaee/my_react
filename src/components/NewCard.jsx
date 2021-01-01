

import React from 'react'

 const NewCard = ({img,title,parag}) => {
  return (
    <div className='lg:flex lg:flex-col lg:w-[30%] flex flex-col w-[95%] m-auto mt-4'>
        <img src={img} alt=''/>
        <h1 className='font-sans lg:font-bold lg:text-2xl text-2xl font-bold lg:mt-2 lg:leading-10 text-[#333]'>{title}</h1>
        <p className='font-sans  lg:font-thin lg:leading-8 text-md font-thin'> {parag}</p>
    </div>
  )
}
export default NewCard