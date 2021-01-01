import { Layout } from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decreaseQuantity, deleteCart, getTotals, increaseQuantity, removeItem } from '../redux/cartSlice'
import { useEffect } from 'react'
import axios from 'axios'



const ShoppingCart = () => {
    const isLogin = localStorage.getItem("token")
    const cartData=useSelector((state)=>state.cart.cartItems)
    const cart = useSelector((state)=>state.cart)
    const token = useSelector((state)=>state.auth.token)
    console.log({"this is cart data":cartData});
    const {cartTotalAmount}=useSelector(state=>state.cart)
   

    // checkout handle
const play = cart.cartItems
const now = play.map(elem=>{
  const {id,cartQuantity} = (elem)
  let productId=id
  let quantity=cartQuantity

    const obj ={productId,quantity}
    return obj
})
    console.log({"this is now":now});
    
    const dispatch = useDispatch()
    const checkoutHandler= async ()=>{

      try {
      
      const response = await axios.post("http://localhost:5000/api/orders",
        {
          
          products:now,
      },
      
      {headers:{
        Authorization:`Bearer ${isLogin}`
      }}
      )  
        return response.data
      } catch (error) {
        console.log(error.message);
        
      }
     

    }

   const increaseQuantityHandler=(item)=>{

    dispatch(increaseQuantity(item))

    }
    const decreaseQuantityHandler=(item)=>{

      dispatch(decreaseQuantity(item))
  
      }
      const removeFromCartHandler=(item)=>{
          dispatch(removeItem(item))
      }
      const deleteCartHandler=()=>{

      dispatch(deleteCart())
        
      }
      useEffect(()=>{
        dispatch(getTotals())
              },[cart,dispatch])
      
  return (
    <Layout>

<div className='lg:w-[65%] lg:m-auto lg:mt-10 m-auto w-full'>
      <h1 className='lg:capitalize lg:font-semibold lg:text-3xl lg:mt-3 text-2xl mt-3 font-semibold capitalize text-center mb-4'>shopping cart</h1>
      <div className='lg:w-full bg-[#EEE] lg:flex lg:justify-between lg:h-[60px] lg:p-5 lg:mt-5 lg:text-sm lg:font-thin hidden' >
          <div className='flex gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(170,170,170,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.6366 13.0515L5.97974 7.39468L7.39395 5.98047L13.0508 11.6373L18.0006 6.68758V18.0013H6.68684L11.6366 13.0515Z"></path></svg> <span className='text-[#bdbdbd]'>Lowest price</span></div>
          <div className='flex gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(170,170,170,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM13.7327 10.5855C14.5137 11.3666 15.78 11.3666 16.5611 10.5855C17.3421 9.80448 17.3421 8.53815 16.5611 7.7571C15.78 6.97606 14.5137 6.97606 13.7327 7.7571C12.9516 8.53815 12.9516 9.80448 13.7327 10.5855Z"></path></svg>
            <span className='text-[#bdbdbd]'>best deals</span>
          </div>
          <div className='flex gap-2 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(170,170,170,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z"></path>
          </svg>
          <span className='text-[#bdbdbd]'>money back guarantee</span>
          </div>
          <div className='flex gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(170,170,170,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z"></path></svg>
          
            <span className='text-[#bdbdbd]'>super fast  delivery</span>
          </div>
          <div className='flex gap-2 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(170,170,170,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
          <span className='text-[#bdbdbd]'>7 day support</span>
          </div>

      </div>

      {!token? <p className='lg:text-lg lg:mt-5 capitalize'>please Login...</p> :   <div className='border-2 lg:mt-5 p-3'>
      <div className='lg:w-full lg:grid lg:grid-cols-[1fr_3fr_1fr_1fr_1fr]  bg-[#EEE] font-thin text-xs uppercase pt-2 pb-2 hidden'>
          <h2 className='text-center'>image</h2>
          <h2 className='text-center'>product</h2>
          <h2 className='text-center'>unit price</h2>
          <h2 className='text-center'>QTY</h2>
          <h2 className='text-center'>$subtotal</h2>
        </div>
           
    {cartData?.length===0? <div>
    <div className='lg:text-3xl lg:font-semibold font-sans  w-full text-center lg:mt-10 lg:mb-10 capitalize'>your shopping cart is empty</div>
    <p className='font-sans font-thin'>You have no items in your shopping cart.</p>
    <p className='font-thin font-sans'>please <Link to={"/Store"} className= 'font-normal text-blue-400 hover:text-blue-300'>Continue shopping</Link></p>
    </div> : cartData?.map(item=><div className='sm:mt-5 sm:mb-5 mt-5 mb-5 lg:mt-0 sm:grid sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] grid grid-cols-[1fr_2fr_1fr]  text-center sm:border-b-2 sm:p-2 border-none p-0 w-full'>
       
        {<img className='max-w-[115px] max-h-[115px] sm:order-1 order-1' src={`http://localhost:5000${item?.thumbnail}`}  alt='item-image'/>}
        {<div className=' lg:flex lg:justify-center text-sm sm:order-2 order-2'><Link className='lg:w-fit lg:h-fit lg:text-sm lg:mt-3 font-sans text-[#2a5599] hover:text-[#4587e6] flex justify-center'>{item.title}</Link></div>}
        {<div className='lg:text-sm font-light lg:mt-2 sm:order-3 order-5'>${item.price}</div>}

        {
          <div className='lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-3 sm:order-4 order-4'>
          <div className='lg:flex lg:items-center lg:justify-center lg:gap-3 lg:w-full flex justify-center items-center gap-4 mt-3'>
          <button onClick={()=>decreaseQuantityHandler(item)} className='lg:w-[20%] lg:rounded-lg bg-[#f5f5f5] lg:flex lg:items-center lg:justify-center'>-</button>
          <div className='text-center lg:text-sm font-light lg:w-[50%] lg:flex lg:justify-center lg:items-center'>{item.cartQuantity}</div>
          <button onClick={()=>increaseQuantityHandler(item)} className='lg:w-[20%] lg:rounded-lg bg-[#f5f5f5] lg:flex lg:items-center lg:justify-center'>+</button>
          </div>
          <button onClick={()=>removeFromCartHandler(item)} className='lg:text-xs text-xs mt-4 font-light border-xl bg-[#f5f5f5] drop-shadow-[1px_1px_0_#f2f2f2] text-center whitespace-nowrap lg:hover:bg-[#e5e5e5] p-2 shadow-sm lg:w-min'>Delete</button>
          </div>
        }
        {<div className='lg:text-sm font-bold lg:mt-2 text-[#2a5599] sm:order-5 order-3 '>${((item.cartQuantity)*JSON.parse(item?.price)).toFixed(2) }</div>}
        
    </div>)}
    
    </div>   }
     
    { cartData.length===0 ? "": <button onClick={deleteCartHandler} className='text-white text-xs font-sans ease-linear lg:mt-3 lg:mb-3 bg-red-700  lg:shadow-md lg:rounded-lg lg:p-2  mb-3 mt-3 w-[100px] p-2 ms-2 border-[#ccc] lg:hover:bg-red-500'>Delete Cart</button>}

    <div className='border-[1px] border-[#ddd] lg:w-[40%] ms-auto lg:mt-4'>
        <h1 className='bg-[#059] lg:text-sm text-white font-thin capitalize lg:p-2 p-1'>order total</h1>
          <div className='lg:flex lg:justify-end lg:items-center border-b-[1px] border-solid border-[#ddd]'>
            <div className='lg:w-1/2 lg:p-2 lg:font-medium lg:text-lg text-end p-2'>Order Total</div>
           {token ? <div className='lg:w-1/2 lg:p-2 lg:font-medium lg:text-lg lg:text-end text-end p-2'> ${JSON.parse(cartTotalAmount.toFixed(2))}</div>:""}
          </div>
          
          <div className='lg:w-full lg:text-right lg:p-3 p-2 text-right'>
          <button onClick={checkoutHandler} className='text-white bg-[#079c31] hover:bg-[#24752c] lg:w-[200px] lg:h-[50px] drop-shadow-[1px_1px_0_#068431] lg:ms-auto lg:font-thin p-2 mt-2 mb-2 w-[200px]'>Proceed to Checkout</button>
          </div>
          
        </div>
      
      
</div>

    </Layout>
  )
}

export default ShoppingCart