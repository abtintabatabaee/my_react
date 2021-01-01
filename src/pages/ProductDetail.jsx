import React from 'react'
import { Layout } from '../components/Layout'
import { useGetFetchApiQuery } from '../features/fetchData'
import ProductDetailCard from '../components/ProductDetailCard'
import { useLocation, useParams } from 'react-router-dom'

const ProductDetail = () => {

  const  {data}=useGetFetchApiQuery()
 
const location = useLocation()
  
const params = useParams()

 console.log({"this is location":location});
 console.log({"this is params":params});

const selectedData= data?.products?.find(elem=>JSON.stringify(elem.brand)===JSON.stringify(params.name))
const selectedProduct = selectedData?.items?.find(elem=>elem.id===JSON.parse(params.ID))
 console.log({"this is selected data":selectedData});
 console.log({"this is selected product":selectedProduct});
 

  
    

  return (
    <Layout>
  <div className='bg-[#f5f5f5] lg:flex lg:items-center lg:justify-center' >
        <ProductDetailCard source={`http://localhost:5000${selectedProduct?.thumbnail}`} subHead={selectedProduct?.head}  productName={selectedProduct?.title} productQuote={selectedProduct?.specifics?.map(elem=><li>{elem}</li>)}/>
</div>
    </Layout>
  )
}

export default ProductDetail