import { useGetFetchApiQuery } from '../features/fetchData'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Layout } from '../components/Layout';
import { skipToken } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getTotals } from '../redux/cartSlice';
import { useEffect } from 'react';

 const BrandProducts = () => {
    const params = useParams()
    const {data,isLoading }=useGetFetchApiQuery(BrandProducts ? BrandProducts : skipToken)
    const cart = useSelector((state)=>state.cart)
    const checked = data?.products?.find(elem=>JSON.parse(elem.id)===JSON.parse(params.id))
  const location = useLocation()
    console.log({"this is checked":checked});
    console.log(location);
    
    
   const dispatch = useDispatch()
   const addToCartHandler =(product)=>{
    dispatch(addToCart(product))
   }
   useEffect(()=>{
    dispatch(getTotals())
          },[cart,dispatch])

  return (
    (<Layout>
  <div className='bg-[#f5f5f5]'>
    {isLoading? <div>Loading...</div> : ""}
      <div className='bg-white w-[80%] m-auto'>
        <h1 className='text-center font-bold text-lg p-5'>{checked?.brand}</h1>
       <div className='w-full flex justify-center'> <img className='sm:w-[10%] w-[30%] ' src={`http://localhost:5000${checked?.brandLogo}`} alt='brand-logo'/></div>
        <div>
          <h1 className='bg-[#2a5599] text-white sm:text-lg sm:font-bold text-lg w-full capitalize text-center p-3 mt-3 mb-3'>All Products</h1>
          <div className='sm:flex sm:flex-wrap sm:justify-start sm:gap-10 flex flex-wrap gap-5 bg-[#f5f5f5]'>

            {checked?.items?.map(item=>
              <div className='sm:w-[25%] sm:p-3  bg-white sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:gap-2 sm:flex-shrink-0 sm:flex-grow-0 sm:mt-5 w-[45%] mt-5 flex flex-wrap justify-start p-2'>
                    <Link to={`/ProductDetail/${checked.brand}/${item.id}`} className='sm:w-full  sm:flex sm:justify-center sm:items-center sm:p-2 '><img className='bg-cover sm:w-[250px] w-[110px] sm:h-auto h-[100px] ' src={`http://localhost:5000${item?.thumbnail}`}  alt='item-pic'/></Link>
                    <div className='w-full sm:h-[30px] h-[20px] sm:p-1 bg-[#309c3a] text-xs text-white  flex justify-center items-center   font-thin mt-2 '> Deal if it is Exist </div>
                    <Link className='w-full font-thin text-sm p-2 flex justify-start items-center h-[100px]' ><p className='sm:w-full sm:flex sm:justify-start sm:items-center sm:text-start text-sm'>{item?.title}</p></Link>
                    <p className='text-[#2a5599] sfont-bold w-full flex justify-start items-center p-2'>${item?.price}</p>
                   <div className='sm:w-full sm:flex sm:justify-between sm:items-center'>
                   <button onClick={()=>addToCartHandler(item)}  className='bg-[#059] font-thin  text-sm drop-shadow-[1px_1px_0_#004a85] text-white sm:p-2 p-1  min-w-[120px] transition-all hover:bg-[#204379]'>Add to Cart</button>
                   <Link  to={`/ProductDetail/${checked.brand}/${item.id}`} className='bg-[#f5f5f5] sm:font-thin sm:text-sm sm:p-2 sm:min-w-[120px] drop-shadow-[1px_1px_0_#f2f2f2] sm:hover:bg-[#f0f0f0] sm:block hidden'>View Product</Link>
                   </div>
              </div>
            )
             
              }

          </div>

        </div>

      </div>
      </div>
    </Layout>)
  );
}

export default BrandProducts
