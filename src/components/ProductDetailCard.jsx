import React from 'react'

 const ProductDetailCard = ({source,productName,productQuote,specifics,subHead}) => {
  return (
    <div  className='bg-white w-[55%] mt-5'>
       <div className='x;:w-full'>
       <div className=' lg:flex lg:justify-between p-3'>

                <div className=''><img src={source} alt='product-image'/></div>

                <div className='lg:flex lg:flex-col lg:gap-8'>

                <div className='lg:text-4xl lg:border-[#2a5599] lg:border-s-[8px] font-sans p-2'>{productName}</div>
                <h1 className='font-thin font-sans'>{subHead}</h1>
                <div className='font-thin font-sans'>{productQuote}</div>
                <ul>
                    {specifics}
                </ul>
                </div>

               
        </div>
      

       </div>


        <h1 className='bg-[#2a5599] text-white uppercase lg:text-center lg:p-1 lg:font-light font-sans'>product information</h1>
        

      
    </div>
  )
}

export default ProductDetailCard