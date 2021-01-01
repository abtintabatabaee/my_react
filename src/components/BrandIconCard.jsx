

import React from 'react'
import { Link } from 'react-router-dom'

 const BrandIconCard = ({source,path,name}) => {


  return (
    <Link to={`/Home/BrandProducts/${name}/${path}`}>
    <div className='lg:w-[120px] w-[100px]'>
        <img className='w-full h-full' src={source} alt='brandIcon'/>
    </div>
    </Link>
  )
}
export default BrandIconCard