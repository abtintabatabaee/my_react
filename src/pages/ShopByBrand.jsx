import { Layout } from "../components/Layout"
import { useGetFetchApiQuery } from '../features/fetchData'
import { Link } from 'react-router-dom'
 const ShopByBrand = () => {

  const {data}=useGetFetchApiQuery()
 


  return (


    <Layout>
    <div className='w-full bg-[#f5f5f5]'>
    <div className='w-[90%] m-auto bg-white flex flex-col justify-center items-center'>
    <h1 className='uppercase w-full border-b-[1px] font-bold p-2'>top brands</h1>
        <div className='lg:grid lg:grid-cols-4 gap-10 p-10'>
          {data?.products?.map(elem=>
          <Link  className='w-[45%] flex justify-center items-center '><img className='w-full' src={`http://localhost:5000${elem.brandLogo}`} alt='brand-icon'/></Link>)}

        </div>
        </div>
        </div>
    </Layout>
  )
}
export default ShopByBrand