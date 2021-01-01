

import React from 'react'
import { useGetFetchApiQuery } from '../features/fetchData'
import NewCard from './NewCard'


 const NewInMs = () => {


  const {data}= useGetFetchApiQuery()
  console.log({"this is data":data?.newAt});
  

  return (
    <div className='md:mt-8'>
        <h1 className='uppercase md:text-[40px] text-4xl mt-5 mb-5  font-sans font-extrabold text-[#059] text-center lg:mb-5'>New at Muscle & Strength</h1>

        <div className='lg:flex lg:flex-wrap lg:justify-center lg:gap-5'> 
        {
          
          data?.newAt?.map(elem=>
  
        <NewCard img={`http://localhost:5000${elem?.thumbnail}`} title={elem?.title} parag={elem?.lorem}/>

        )
        }
        </div>
    </div>
  )
}
export default NewInMs