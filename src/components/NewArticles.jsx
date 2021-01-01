import React from 'react'
import { useGetFetchApiQuery } from '../features/fetchData'
import NewCard from './NewCard'

 const NewArticles = () => {

        const {data}= useGetFetchApiQuery()

  return (

 <div className='mt-8'>
        <h1 className='uppercase text-[40px] font-sans font-extrabold text-[#059] text-center mb-5'>New in articles</h1>

        <div className='lg:flex lg:flex-wrap justify-center gap-5'> 
        {
          
          data?.articles?.map(elem=>
  
        <NewCard img={`http://localhost:5000${elem?.thumbnail}`} title={elem?.title} parag={elem?.parag}/>

        )
        }
        </div>
    </div>
  )
}
export default NewArticles