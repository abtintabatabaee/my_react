import React from 'react'
import { useGetFetchApiQuery } from '../features/fetchData'
import NewCard from './NewCard'



 const TrendingWorkouts = () => {

    const {data }= useGetFetchApiQuery()
  
    
  return (
    <div className='mt-8'>
        <h1 className='uppercase lg:text-[40px] lg:font-sans lg:font-extrabold text-[#059] lg:text-center lg:mb-5'>trending in workouts</h1>
        <div className='lg:flex lg:flex-wrap lg:justify-center lg:gap-5'>
        {data?.trending.map(elem=><NewCard img={`http://localhost:5000${elem?.thumbnail}`} title={ elem?.title} parag={elem?.parag }/>)}
    </div>
    </div>
  )
}
export default TrendingWorkouts