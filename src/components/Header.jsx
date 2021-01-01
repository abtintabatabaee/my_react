

import React, {useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { useGetFetchApiQuery } from '../features/fetchData'
import BrandIconCard from './BrandIconCard'
import { useDispatch, useSelector } from 'react-redux'
import { logout, userLogin } from '../redux/authSlice'
 const Header = () => {

    const {data}=useGetFetchApiQuery()
    const {cartTotalQuantity} = useSelector(state=>state.cart)
    const token = useSelector(state=>state.auth.token)
    const status = useSelector(state=>state.auth.loginStatus)
    const name = useSelector(state=>state.auth.username)
  
    console.log({"this is loginStatus":status});
    
    const dispatch = useDispatch()
    console.log({"this is data for icons":data});
    console.log({"this is quantity":cartTotalQuantity});
    console.log({"this is token":token});
    
    const [show,setShow]=useState(false)
    const [block,setBlock]=useState(false)
    const [iconShow,setIconShow]=useState(false)
    const [goalShow,setGoadlShow]=useState(false)
    const [workouShow,setWorkoutShow]=useState(false)
    const [articleShow,setArticleShow]=useState(false)
    const [dietShow,setDietShow]=useState(false)
    const [exerciseShow,setExerciseShow]=useState(false)
    const [recipesShow,setRecipesShow]=useState(false)
    const [toolsShow,setToolsShow]=useState(false)
    const [loginShow,setLoginShow]=useState(false)
    const[enterLogin,setEnterLogin]=useState()
    const[smallMenuShow,setSmallMenuShow]=useState(false)

    let [user,setUser]=useState()
    let [password,setPassword]=useState()
    console.log({"this is user email" : user});
    console.log({"this is user password" : password});
    const smallMenuShowHandler =()=>{

        setSmallMenuShow(true)
        
         document.body.style.position="fixed"
        
    }

    const smallMenuCloseHandler=()=>{

        setSmallMenuShow(false)
         document.body.style.position=""
    }   
    const mouseEnter=()=>{
            setShow(true)
           
           
    }
    const mouseLeave=(e)=>{
        e.stopPropagation();
        setShow(false)
       
       
        
}



const mouseEnter2=()=>{
    setBlock(true)
}
const mouseLeave2=(e)=>{
    e.stopPropagation()
setBlock(false)
}
const mouseEnter3=()=>{
    setIconShow(true)
}
const mouseLeave3=(e)=>{
    e.stopPropagation()
setIconShow(false)
}
const mouseEnter4=()=>{
    setGoadlShow(true)
}
const mouseLeave4=(e)=>{
    e.stopPropagation()
setGoadlShow(false)
}
const mouseEnter5=()=>{
    setWorkoutShow(true)
}
const mouseLeave5=(e)=>{
    e.stopPropagation();
setWorkoutShow(false)
}
const mouseEnter6=()=>{
    setArticleShow(true)
}
const mouseLeave6=(e)=>{
    e.stopPropagation();
setArticleShow(false)
}
const mouseEnter7=()=>{
    setDietShow(true)
}
const mouseLeave7=(e)=>{
    e.stopPropagation()
setDietShow(false)
}
const mouseEnter8=()=>{
    setExerciseShow(true)
}
const mouseLeave8=(e)=>{
    e.stopPropagation()
setExerciseShow(false)
}
const mouseEnter9=()=>{
    setRecipesShow(true)
}
const mouseLeave9=(e)=>{
    e.stopPropagation()
setRecipesShow(false)
}
const mouseEnter10=()=>{
    setToolsShow(true)
}
const mouseLeave10=(e)=>{
    e.stopPropagation()
setToolsShow(false)
}
const loginShowHandler=()=>{

    setLoginShow(true)
}
const closeLoginShow=()=>{
    
    setLoginShow(false)

}
const mouseEnterLogin=()=>{
    setEnterLogin(true)
}
const mouseLeaveLogin=()=>{
    setEnterLogin(false)
}


const loginHandler = async(e)=>{
e.preventDefault()

dispatch(userLogin({
        username:user,
        password:password,}))
    
            
        }
       
          
const logoutHandler = ()=>{
    
    dispatch(logout())
   setUser(user==="")
   setPassword(password==="")
    
}
    useEffect(()=>{
        closeLoginShow()
    },[token])

  return (
    <>
    <div className='bg-[rgb(42,85,153)] sm:w-full sm:p-3 sm:flex sm:justify-center sm:gap-3 sm:relative flex items-center justify-between relative '>
     {(show||block||iconShow||goalShow||workouShow||articleShow||dietShow||exerciseShow||recipesShow||toolsShow)===true ? <div className='sm:w-full sm:h-[100vh] bg-black sm:opacity-50 sm:z-10 sm:top-full sm:absolute '></div>:""}
        {/* small menu */}
     <div onClick={smallMenuShowHandler}  className='sm:hidden  block'>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>


     </div>
     { smallMenuShow===true ?   <ul className='flex flex-col z-50 w-[80vw] h-dvh bg-[#059] text-white fixed top-0 left-0'>

<li className='relative border-b-[#004780] p-2 border-solid border-b-[1px] ' onClick={mouseEnter}><Link className='flex items-center gap-1 font-thin text-sm' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 2V4H17V7C18.6569 7 20 8.34315 20 10V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V10C4 8.34315 5.34315 7 7 7V4H5V2H19ZM17 9H7C6.44772 9 6 9.44772 6 10V20H18V10C18 9.44772 17.5523 9 17 9ZM13 11V13H15V15H12.999L13 17H11L10.999 15H9V13H11V11H13ZM15 4H9V7H15V4Z"></path></svg>Store</Link>
{show===false ? "" : 
    <div  className='fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh'>
    <div  onClick={(e)=>mouseLeave(e)} className='w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
        <div className='flex justify-between items-center p-4'>

            <h1 className='text-black sm:text-xl sm:p-2'>Store</h1>
            <Link onClick={smallMenuCloseHandler} to={"/Store"}><button className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white p-2 '>go to store</button></Link>
        </div>
        <ul>
        <h1 className='bg-[#EEE] text-black p-2'>find products</h1>
            <li onClick={mouseEnter2}  className='text-[#3b6aa5] flex justify-between items-center  border border-b-[1px] w-full hover:bg-[#f5f5f5] '><Link className='p-3 w-full flex justify-between'> 
            <p>shop by category</p>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
            </Link>
            { block ===true ?
                <div className='fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh'>
                <div  onClick={(e)=>mouseLeave2(e)} className='w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
                        <div className='w-full flex justify-between items-center p-4'>
                            <h1 className='text-black sm:text-xl'>Categories</h1>
                            <button className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white p-2'>view all categories</button>
                        </div>
                        <h1 className='bg-[#EEE] text-black p-2'>top categories</h1>
                        <ul className='w-full overflow-scroll h-dvh'>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>protein</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>pre-workout</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>fat loss</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>creatine</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>test boosters</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>mass gainers</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>BCAAs & EAAs</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>health and wellness</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>vitamins and minerals</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>clothing</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>functional foods</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>workout accesories</li></Link>
                        </ul>

                </div>
            :""}
               
            </li>
            <li onClick={mouseEnter3}  className='text-[#3b6aa5] flex justify-between litems-center  border:xl border-b-[1px] sm:w-full hover:bg-[#f5f5f5]'><Link  className='w-full p-3 flex justify-between'><p className='sm:block'>shop by brand</p>
            <svg className='sm:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
            </Link>

             {  iconShow===true ?
             <div className='fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh'>
             <div  onClick={(e)=>mouseLeave3(e)} className='cursor-pointer w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
             <div className='w-full flex justify-between items-center p-4'>
                <h1 className='text-black sm:text-xl'>Brands</h1>
                <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white p-2 '>view all brands</button>
             </div>
             <h1 className='bg-[#EEE] text-black p-2 w-full'>Top Brands</h1>
             
            <div className='w-full flex justify-between gap-2 flex-wrap p-3'> {   data?.products.map(elem=>
                  
                <BrandIconCard source={`http://localhost:5000${elem?.brandLogo}` } name={elem.brand} path={elem.id} />
                
               
                
                )}
                    
                </div>
                </div>
                :""}       

               
            </li>
            <li onMouseEnter={mouseEnter4}  className='text-[#3b6aa5] flex justify-between items-center  border border-b-[1px] w-full hover:bg-[#f5f5f5]'><Link className='p-3 w-full flex justify-between'><p>shop by goal</p>
            <svg className='block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
            </Link>
                
                {goalShow===true ?
                    <div className='fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh'>
                    <div  onClick={(e)=>mouseLeave4(e)} className='cursor-pointer w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
                        <div className='flex justify-between items-center p-4'>
                            <h1 className='text-black sm:text-xl'>goals</h1>
                            <button className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white p-2 ' >view all goals</button>
                        </div>
                        <h1 className='bg-[#EEE] text-black p-2 w-full'>shop by goal</h1>
                        <ul className=''>
                            <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>build muscle</Link></li>
                            <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>lose fat</Link></li>
                            <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>improve workout</Link></li>
                            <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>health & wellness</Link></li>
                            <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>improve sport</Link></li>
                            <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>increase energy</Link></li>
                        
                        </ul>
                    </div>
               :""}

            </li>
        </ul>
        <ul className='w-full'>
            <h1 className='bg-[#EEE] text-black p-2'>Deals & Coupons</h1>
            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>deals & coupons</li></Link>
            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>stacks & bundles</li></Link>
            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>clearance & overstock</li></Link>
            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>bulk buy coupons</li></Link>
        </ul>
        <ul>
            <h1 className='bg-[#EEE] text-black p-2'>rewards</h1>
            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li >rewards main page</li></Link>
            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>rewards catalog</li></Link>
            <Link>check my points</Link>
        </ul>
        <ul>
            <h1 className='bg-[#EEE] text-black p-2'>new and trending</h1>
            <Link className='w-full flex  text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>top 50 products</li></Link>
            <Link className='w-full flex  text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>top 20 brands</li></Link>
            <Link className='w-full flex  text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>new products</li></Link>
        </ul>
        <ul>
            <h1 className='bg-[#EEE] text-black p-2'>account</h1>
            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>acount login</li></Link>
            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>order history</li></Link>
        </ul>

    </div>}
</li>
<li className='relative border-b-[#004780] p-2 border-solid border-b-[1px] ' onClick={mouseEnter5} ><Link className='flex items-center gap-1 font-thin text-sm'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14.0004 6C14.0004 7.10457 13.1049 8 12.0004 8C10.8958 8 10.0004 7.10457 10.0004 6C10.0004 4.89543 10.8958 4 12.0004 4C13.1049 4 14.0004 4.89543 14.0004 6ZM15.4652 8C15.8056 7.41165 16.0004 6.72857 16.0004 6C16.0004 3.79086 14.2095 2 12.0004 2C9.79122 2 8.00036 3.79086 8.00036 6C8.00036 6.72857 8.19515 7.41165 8.53549 8H5.06615C4.57888 8 4.16255 8.3512 4.08045 8.8315L2.2001 19.8315C2.0957 20.4423 2.56618 21 3.18581 21H20.8149C21.4345 21 21.905 20.4423 21.8006 19.8315L19.9203 8.8315C19.8382 8.3512 19.4218 8 18.9346 8H15.4652ZM12.0004 10H18.091L19.6295 19H4.37125L5.90971 10H12.0004Z"></path></svg>
Workouts</Link>
{workouShow === true ?
                    <div className='xl:absolute xl:left-0  xl:z-10xl:w-[20vw] fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh'>
                    <div  onClick={(e)=>mouseLeave5(e)} className='w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
                        <div className='xl:flex xl:justify-between xl:items-center xl:p-2 flex justify-between p-4 items-center'>
                        
                            <h1 className='text-black xl:text-xl font-thin'>workouts</h1>
                            <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white font-thin  p-2'>go to workouts</button>
                        </div>
                        <h1 className='bg-[#EEE] text-black p-2 font-thin'>popular workout categories</h1>
                        <ul>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>muscle building workouts</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>fat loss workouts</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>at home workouts</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>workouts for women</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>workouts for men</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>view all</li></Link>
                        </ul>
                        <h1 className='bg-[#EEE] text-black p-2'>top workouts</h1>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>M&S full body workouts</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>12 week women workout plan</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>5 day dumbbell workout</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>push pull legs (PPL) workouts</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>3 day workout split</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>3 day full body workout</li></Link>
                    </div>:""}
</li>
<li onClick={mouseEnter6} className='relative border-b-[#004780] p-2 border-solid border-b-[1px] '><Link className='flex items-center gap-1 font-thin text-sm'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path></svg>
Articles</Link>
  { articleShow===true ? 
  <div className='fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh'>
  <div  onClick={(e)=>mouseLeave6(e)} className='w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
    <div className='flex justify-between items-center p-4'>
                            <h1 className='text-black sm:text-xl'>articles</h1>
                            <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white p-2'>go to articles</button>
                        </div>
                        <h1 className='bg-[#EEE] text-black p-2 font-thin'>popular article categories</h1>
                        <ul>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>muscle building</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>fat loss </li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>for women</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>training</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>nutrition</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>supplements</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>motivation</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>view all</li></Link>
                        </ul>
    </div>:""}
</li>
<li onClick={mouseEnter7} className='relative border-b-[#004780] p-2 border-solid border-b-[1px]'><Link className='flex items-center gap-1 font-thin text-sm'>
<svg fill="#fff" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.00 512.00" stroke="#fff" stroke-width="0.0051199900000000005" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.0239980000000002"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M324.799,68.799c-103.222,0-187.2,83.978-187.2,187.2s83.978,187.2,187.2,187.2s187.2-83.978,187.2-187.2 S428.022,68.799,324.799,68.799z M324.799,407.169c-83.354,0-151.168-67.814-151.168-151.168s67.814-151.17,151.168-151.17 s151.168,67.814,151.168,151.168S408.154,407.169,324.799,407.169z"></path> </g> </g> <g> <g> <path d="M324.799,148.019c-59.541,0-107.981,48.44-107.981,107.981s48.44,107.981,107.981,107.981S432.78,315.54,432.78,255.999 S384.34,148.019,324.799,148.019z M324.799,327.95c-39.673,0-71.949-32.276-71.949-71.949s32.276-71.949,71.949-71.949 c39.673,0,71.949,32.276,71.949,71.949S364.472,327.95,324.799,327.95z"></path> </g> </g> <g> <g> <path d="M110.491,68.799c-9.95,0-18.016,8.066-18.016,18.016v96.161H81.959V86.815c0-9.95-8.066-18.016-18.016-18.016 c-9.95,0-18.016,8.066-18.016,18.016v96.161h-9.896V86.815c0-9.95-8.066-18.016-18.016-18.016S0,76.866,0,86.815v99.764 c0,17.881,14.547,32.428,32.428,32.428h12.298v206.175c0,9.95,8.066,18.016,18.016,18.016s18.016-8.066,18.016-18.016V219.009 h15.321c17.881,0,32.428-14.547,32.428-32.428V86.815C128.507,76.866,120.441,68.799,110.491,68.799z"></path> </g> </g> </g></svg>
Diet plan</Link>
{ dietShow===true ? <div className=' fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh '>
    <div  onClick={(e)=>mouseLeave7(e)} className='w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
    <div className='flex justify-between items-center p-4'>
    
                            <h1 className='text-black '>Diet Plans</h1>
                            <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white p-2'>Go to Diet Plans</button>
                        </div>
                        <h1 className='bg-[#EEE] text-black p-2 font-thin'>popular Diet Plans</h1>
                        <ul>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>clean eating</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>IIFYM & Flexible Dieting </li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Keto & Low Carb</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Carb Cycling</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Intermittent Fasting</li></Link>
                           
                        </ul>
    </div>:""}
</li>
<li onClick={mouseEnter8}  className='relative border-b-[#004780] p-2 border-solid border-b-[1px]'><Link className='flex items-center gap-1 font-thin text-sm'>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 32" enable-background="new 0 0 30 32"><g><path fill="rgba(255,255,255,1)" d="M23.246,20.658c0.107-0.255-0.012-0.548-0.267-0.655c-0.253-0.104-0.548,0.012-0.655,0.267 c-0.725,1.719-2.395,2.829-4.253,2.829c-1.023,0-1.992-0.329-2.801-0.95c-0.219-0.17-0.533-0.126-0.701,0.092 c-0.168,0.22-0.127,0.533,0.092,0.701c0.986,0.757,2.166,1.157,3.411,1.157C20.333,24.099,22.364,22.748,23.246,20.658z"></path><path stroke="rgba(255,255,255,1)" stroke-width="1" fill="rgba(255,255,255,1)" d="M21.751,4.394c-0.106-0.102-2.649-2.513-5.84-3.569l-0.434-0.198c-2.836-1.295-6.209-0.522-8.202,1.88 C6.97,2.874,6.828,3.339,6.874,3.815C6.92,4.291,7.148,4.719,7.517,5.021C7.57,5.064,7.593,5.136,7.574,5.202 C7.541,5.318,7.525,5.436,7.528,5.553c0.062,2.408,1.993,4.294,4.375,4.294h0c0.692-0.016,2.126-0.412,2.689-2.279 c0.135-0.45,0.251-0.756,0.343-0.962c0.207,3.003,1.843,5.742,3.332,7.65c-0.234-0.036-0.472-0.054-0.712-0.054 c-1.894,0-3.591,1.128-4.353,2.819c-1.552-1.185-3.448-1.829-5.414-1.829c-1.87,0-3.7,0.593-5.212,1.681 C2.09,16.231,1.326,15.841,0.5,15.841c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.64,0,1.22,0.381,1.477,0.971 c0.062,0.145,0.189,0.25,0.342,0.287c0.152,0.035,0.313,0,0.435-0.101c1.416-1.164,3.204-1.806,5.037-1.806 c1.963,0,3.848,0.725,5.308,2.039c0.129,0.117,0.311,0.157,0.476,0.108c0.167-0.049,0.296-0.181,0.341-0.349 c0.447-1.642,1.944-2.789,3.642-2.789c0.728,0,1.427,0.21,2.023,0.59c0.653,0.7,1.127,1.12,1.192,1.177 c0.188,0.165,0.471,0.164,0.66-0.001c0.188-0.166,0.225-0.446,0.084-0.654c-0.34-0.506-0.767-0.934-1.253-1.269 c-1.579-1.721-4.212-5.134-4.355-8.873c-0.028-0.121-0.11-0.396-0.281-0.617c-0.031-0.166-0.138-0.315-0.308-0.378 c-0.089-0.033-2.201-0.797-4.301,0.485c-0.235,0.144-0.31,0.451-0.166,0.688c0.094,0.154,0.259,0.239,0.427,0.239 c0.089,0,0.179-0.023,0.26-0.073c0.963-0.588,1.938-0.63,2.604-0.562c-0.17,0.32-0.335,0.753-0.507,1.325 c-0.466,1.545-1.563,1.55-1.711,1.568c-1.856,0-3.349-1.458-3.389-3.372c0.127-0.449-0.023-0.931-0.385-1.228 c-0.162-0.132-0.262-0.32-0.282-0.528C7.849,3.51,7.912,3.306,8.045,3.145c1.706-2.057,4.59-2.72,7.017-1.608l0.484,0.218 c3.022,1.003,5.49,3.339,5.5,3.348c7.183,7.477,7.881,14.339,7.948,15.554c-3.24,3.386-7.764,5.324-12.445,5.324 c-2.16,0-4.266-0.396-6.259-1.176c-0.153-0.06-0.327,0.025-0.462,0.12c-0.137,0.093-0.217,0.314-0.217,0.479 C9.609,28.489,7.107,31,4.032,31c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c3.434,0,6.261-2.652,6.553-6.021 c1.913,0.665,3.916,1.001,5.963,1.001c5.026,0,9.88-2.111,13.317-5.792C29.951,21.096,30,20.976,30,20.85 C30.002,20.53,29.95,12.928,21.751,4.394z"></path></g></svg>
Exercises</Link>
{exerciseShow ===true ?<div className='fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh'>
    <div  onClick={(e)=>mouseLeave8(e)} className='w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
    <div className='flex justify-between items-center p-4'>
                            <h1 className='text-black lg:text-xl'>Exercises</h1>
                            <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white p-2'>Go to Exercises</button>
                        </div>
                        <h1 className='bg-[#EEE] text-black p-2 font-thin uppercase'>Exercises By Muscle Group</h1>
                        <ul>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Chest Exercises</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Abs Exercises </li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Shoulder Exercises</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Biceps Exercises</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>View All</li></Link>
                           
                        </ul>
                        <h1 className='bg-[#EEE] text-black p-2 font-thin uppercase'>most popular exercises</h1>
                        <ul>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Military Press (AKA Overhead Press)</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Dumbbell Deadlift </li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Arnold Press</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Dumbbell Laterial Raises</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Bent Over Rows</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Dumbbell Pullover</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Stiff Leg Deadlift (AKA Romanian Deadlift)</li></Link>
                           
                        </ul>
    </div> :""}
</li>
<li onClick={mouseEnter9}  className='relative border-b-[#004780] p-2 border-solid border-b-[1px]'><Link className='flex items-center gap-1 font-thin text-sm'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path></svg>
Recipes</Link>
{recipesShow ===true ?
<div className='fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh'>
    <div  onClick={(e)=>mouseLeave9(e)} className='w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
    <div className='flex justify-between items-center p-4'>
                            <h1 className='text-black '>Recipes</h1>
                            <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white p-2'>Go to Recipes</button>
                        </div>
                        <h1 className='bg-[#EEE] text-black p-2 font-thin'>Popular Recipe Categories</h1>
                        <ul>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Protein Shake Recipes</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Protein Bar Recipes </li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>High Protein Recipes</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Low Carb Recipes</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Vegetarian Recipes</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>View All</li></Link>
                           
                        </ul>
    </div>:""}
</li>
<li onClick={mouseEnter10} className='relative border-b-[#004780] p-2 border-solid border-b-[1px]'><Link className='flex items-center gap-1 font-thin text-sm'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2ZM5 4V20H19V4H5ZM7 6H17V10H7V6ZM7 12H9V14H7V12ZM7 16H9V18H7V16ZM11 12H13V14H11V12ZM11 16H13V18H11V16ZM15 12H17V18H15V12Z"></path></svg>
Tools</Link>
{toolsShow===true ?    <div className='fixed z-50 w-[80vw] top-0 left-0 bg-white font-thin border-solid border-[1px] border-slate-400 overflow-scroll h-dvh'>
    <div  onClick={(e)=>mouseLeave10(e)} className='w-full bg-[#059] text-white p-2 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>back</div>
    <div className='flex justify-between items-center p-4'>
                            <h1 className='text-black lg:text-xl'>Tools</h1>
                            <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white p-2 '>Go to Tools</button>
                        </div>
                        <h1 className='bg-[#EEE] text-black p-2 font-thin'>Popular Tools</h1>
                        <ul>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Bench Press Calculator</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>BMR + Daily Calorie Calculator </li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Bodyfat % Calculator</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Body Measurements Calculator</li></Link>
                            <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Bench Press Max Chart</li></Link>
                           
                        </ul>
    </div>  :""}
</li>


</ul>  :""   }
{smallMenuShow===true ? <div onClick={smallMenuCloseHandler} className='fixed top-0 left-0 w-[100vw] h-dvh bg-black z-20 opacity-75'></div> :"" }

{/* m&s logo */}
    <div className='lg:flex lg:justify-center lg:items-center lg:w-[10%] hidden'>
       <Link to={"/"}> <svg viewBox=".60000002 .1 338.3999939 200.69999695" width="110" height="110" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m184.2 111c-2.4 0-4 1.1-4.3 2.7-.3 1.2.7 2.3 2.5 3.9 3-1 4.8-1.9 5.3-4 .2-1.5-1.3-2.6-3.5-2.6z"></path><path d="m168.8 132.3c-.7 3.3 1.9 6 5.8 6 2.6 0 5.8-.8 7.1-1.6l-8.5-9.4c-2.7 1.1-3.9 2.6-4.4 5z"></path><path d="m328.9 97.2c4.1-27.8-16.8-43.1-75.4-43.1-27.5 0-51.9 3.8-67.7 15.6 9.3-9.6 22.7-15.2 38.6-18.1l9.6-45.5h-76.4l-39.4 79.8h-.4l-5.6-79.8h-76.3l-29.3 137.3h49.3l20.8-98.1h.4l8.1 98.1h41.2l49.6-98.1h.4l-16.7 78.8c2.2-1.3 4.8-2.2 7.9-2.8-2.6-2.4-3.1-4.7-2.6-7.2 1.2-5.6 6.9-10.6 20.3-10.6 8.9 0 16.7 2.8 15.2 10.2-1 4.8-5 7.7-11.8 9.2l5.8 6.6c4.7-3.1 7.3-5.5 10.3-8.1l5.8 6.2c-4.2 4.2-6.7 5.9-10.2 8.1l5 5.6 1.1-5.3 47.3 7.3c6.8 1.1 8.3 5 7.6 8.8-1.3 6.3-6.6 10.7-22.9 10.7-8.1 0-13.6-.9-17.1-2.8-3.3-2-4.2-5-3.5-9.4h-62.9c-8.1 38.7 34.5 44.2 74.5 44.2 58.4 0 87.7-15.1 94.6-47.2 4.8-22.3-8.9-34.5-34.3-38.3l-60.1-9.2c-5-.7-6.1-3.1-5.3-6.8 1.1-5.5 7.4-9.4 22.9-9.4 5.7 0 11.4.7 15.5 2.8 4.4 1.8 7 5.2 5.7 10.5z"></path><path d="m233 44.2h-2.3l.3-1.6h7l-.3 1.6h-2.3l-1 4.6h-2.4z"></path><path d="m238.6 42.6h3.4l.2 3.6 1.8-3.6h3.4l-1.3 6.2h-2.1l.9-4.4-2.2 4.4h-1.9l-.4-4.4-.9 4.4h-2.2z"></path></g></svg></Link>
    </div>

    <div className='flex justify-center items-center w-[30%] sm:hidden'>
       <Link to={"/"}> <svg viewBox=".60000002 .1 338.3999939 200.69999695" width="90" height="90" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m184.2 111c-2.4 0-4 1.1-4.3 2.7-.3 1.2.7 2.3 2.5 3.9 3-1 4.8-1.9 5.3-4 .2-1.5-1.3-2.6-3.5-2.6z"></path><path d="m168.8 132.3c-.7 3.3 1.9 6 5.8 6 2.6 0 5.8-.8 7.1-1.6l-8.5-9.4c-2.7 1.1-3.9 2.6-4.4 5z"></path><path d="m328.9 97.2c4.1-27.8-16.8-43.1-75.4-43.1-27.5 0-51.9 3.8-67.7 15.6 9.3-9.6 22.7-15.2 38.6-18.1l9.6-45.5h-76.4l-39.4 79.8h-.4l-5.6-79.8h-76.3l-29.3 137.3h49.3l20.8-98.1h.4l8.1 98.1h41.2l49.6-98.1h.4l-16.7 78.8c2.2-1.3 4.8-2.2 7.9-2.8-2.6-2.4-3.1-4.7-2.6-7.2 1.2-5.6 6.9-10.6 20.3-10.6 8.9 0 16.7 2.8 15.2 10.2-1 4.8-5 7.7-11.8 9.2l5.8 6.6c4.7-3.1 7.3-5.5 10.3-8.1l5.8 6.2c-4.2 4.2-6.7 5.9-10.2 8.1l5 5.6 1.1-5.3 47.3 7.3c6.8 1.1 8.3 5 7.6 8.8-1.3 6.3-6.6 10.7-22.9 10.7-8.1 0-13.6-.9-17.1-2.8-3.3-2-4.2-5-3.5-9.4h-62.9c-8.1 38.7 34.5 44.2 74.5 44.2 58.4 0 87.7-15.1 94.6-47.2 4.8-22.3-8.9-34.5-34.3-38.3l-60.1-9.2c-5-.7-6.1-3.1-5.3-6.8 1.1-5.5 7.4-9.4 22.9-9.4 5.7 0 11.4.7 15.5 2.8 4.4 1.8 7 5.2 5.7 10.5z"></path><path d="m233 44.2h-2.3l.3-1.6h7l-.3 1.6h-2.3l-1 4.6h-2.4z"></path><path d="m238.6 42.6h3.4l.2 3.6 1.8-3.6h3.4l-1.3 6.2h-2.1l.9-4.4-2.2 4.4h-1.9l-.4-4.4-.9 4.4h-2.2z"></path></g></svg></Link>
    </div>
    <div className='lg:w-[40%] lg:flex lg:flex-col lg:items-end lg:justify-end lg:gap-1'>
  
        <form className='md:w-full lg:w-full sm:block hidden'>
            <input placeholder='search products,Brands,Workouts...' className='lg:text-sm lg:p-2 lg:w-full lg:rounded-md' w-full type='search'></input>
        </form>
        <ul className='lg:w-full lg:flex lg:justify-between text-white lg:mt-3 hidden '>

            <li className='relative ' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><Link to={"/Store"}>Store</Link>
            {show===false ? "" : 
                <div className='lg:absolute lg:z-10 lg:w-[20vw] bg-white font-thin border-solid border-[1px] border-slate-400'>
                    <div className='lg:flex lg:justify-between lg:items-center lg:p-4'>
                        <h1 className=' text-black lg:text-xl lg:p-2'>Store</h1>
                        <button className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white lg:p-3 lg:min-w-[130px]'>go to store</button>
                    </div>
                    <ul>
                    <h1 className='bg-[#EEE] text-black p-2'>find products</h1>
                        <li onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2} className='text-[#3b6aa5] lg:flex lg:justify-between lg:items-center  border border-b-[1px] w-full hover:bg-[#f5f5f5] '><Link className='lg:p-3 lg:w-full lg:flex lg:justify-between'> 
                        <p>shop by category</p>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                        </Link>
                        { block ===true ?
                            <div className='lg:absolute lg:left-full lg:top-0  lg:w-[20vw] bg-white'>
                                    <div className='lg:w-full lg:flex lg:justify-between lg:items-center lg:p-4'>
                                        <h1 className='text-black lg:text-xl'>Categories</h1>
                                        <button className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white xl:p-3 xl:min-w-[130px]'>view all categories</button>
                                    </div>
                                    <h1 className='bg-[#EEE] text-black p-2'>top categories</h1>
                                    <ul>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>protein</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>pre-workout</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>fat loss</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>creatine</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>test boosters</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>mass gainers</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>BCAAs & EAAs</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>health and wellness</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>vitamins and minerals</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>clothing</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>functional foods</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>workout accesories</li></Link>
                                    </ul>

                            </div>
                        :""}
                           
                        </li>
                        <li onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3} className='text-[#3b6aa5] lg:flex lg:justify-between lg:items-center  lg:borderxl: border-b-[1px] lg:w-full hover:bg-[#f5f5f5]'><Link to={"/ShopByBrand"} className='lg:w-full lg:p-3 lg:flex lg:justify-between'><p className='lg:block'>shop by brand</p>
                        <svg className='lgl:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                        </Link>

                         {  iconShow===true ?
                         <div className='lg:absolute bg-white lg:flex lg:flex-wrap lg:w-[20vw] lg:left-full lg:top-0'>
                         <div className='lg:w-full lg:flex lg:justify-between lg:items-center lg:p-4'>
                            <h1 className='text-black lg:text-xl'>Brands</h1>
                            <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white lg:p-3 lg:min-w-[130px]'>view all brands</button>
                         </div>
                         <h1 className='bg-[#EEE] text-black p-2 w-full'>Top Brands</h1>
                         
                        <div className='lg:w-full lg:flex lg:justify-between lg:gap-2 lg:flex-wrap lg:p-3'> {   data?.products.map(elem=>
                              
                            <BrandIconCard source={`http://localhost:5000${elem?.brandLogo}` } name={elem.brand} path={elem.id} />
                            
                           
                            
                            )}
                                
                            </div>
                            </div>
                            :""}       

                           
                        </li>
                        <li onMouseEnter={mouseEnter4} onMouseLeave={mouseLeave4} className='text-[#3b6aa5] flex justify-between items-center  border border-b-[1px] w-full hover:bg-[#f5f5f5]'><Link className='p-3 w-full flex justify-between'><p>shop by goal</p>
                        <svg className='block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                        </Link>
                            
                            {goalShow===true ?
                                <div className='lg:absolute lg:left-full lg:top-0 lg:z-10 bg-white lg:w-[20vw]'>
                                    <div className='lg:flex lg:justify-between lg:items-center lg:p-2'>
                                        <h1 className='text-black lg:text-xl'>goals</h1>
                                        <button className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white lg:p-3 lg:min-w-[130px]' >view all goals</button>
                                    </div>
                                    <h1 className='bg-[#EEE] text-black p-2 w-full'>shop by goal</h1>
                                    <ul className=''>
                                        <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>build muscle</Link></li>
                                        <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>lose fat</Link></li>
                                        <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>improve workout</Link></li>
                                        <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>health & wellness</Link></li>
                                        <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>improve sport</Link></li>
                                        <li className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><Link className='w-full'>increase energy</Link></li>
                                    
                                    </ul>
                                </div>
                           :""}

                        </li>
                    </ul>
                    <ul className='w-full'>
                        <h1 className='bg-[#EEE] text-black p-2'>Deals & Coupons</h1>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>deals & coupons</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>stacks & bundles</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>clearance & overstock</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>bulk buy coupons</li></Link>
                    </ul>
                    <ul>
                        <h1 className='bg-[#EEE] text-black p-2'>rewards</h1>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li >rewards main page</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>rewards catalog</li></Link>
                        <Link>check my points</Link>
                    </ul>
                    <ul>
                        <h1 className='bg-[#EEE] text-black p-2'>new and trending</h1>
                        <Link className='w-full flex  text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>top 50 products</li></Link>
                        <Link className='w-full flex  text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>top 20 brands</li></Link>
                        <Link className='w-full flex  text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>new products</li></Link>
                    </ul>
                    <ul>
                        <h1 className='bg-[#EEE] text-black p-2'>account</h1>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>acount login</li></Link>
                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5]'><li>order history</li></Link>
                    </ul>

                </div>}
            </li>
            <li className='relative' onMouseEnter={mouseEnter5} onMouseLeave={mouseLeave5}><Link>Workouts</Link>
            {workouShow === true ?
                                <div className='xl:absolute xl:left-0  xl:z-10 bg-white xl:w-[20vw]'>
                                    <div className='xl:flex xl:justify-between xl:items-center xl:p-2'>
                                        <h1 className='text-black xl:text-xl'>workouts</h1>
                                        <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white xl:p-3 xl:min-w-[130px]'>go to workouts</button>
                                    </div>
                                    <h1 className='bg-[#EEE] text-black p-2 font-thin'>popular workout categories</h1>
                                    <ul>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>muscle building workouts</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>fat loss workouts</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>at home workouts</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>workouts for women</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>workouts for men</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>view all</li></Link>
                                    </ul>
                                    <h1 className='bg-[#EEE] text-black p-2'>top workouts</h1>
                                    <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>M&S full body workouts</li></Link>
                                    <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>12 week women workout plan</li></Link>
                                    <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>5 day dumbbell workout</li></Link>
                                    <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>push pull legs (PPL) workouts</li></Link>
                                    <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>3 day workout split</li></Link>
                                    <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>3 day full body workout</li></Link>
                                </div>:""}
            </li>
            <li onMouseEnter={mouseEnter6} onMouseLeave={mouseLeave6} className='relative'><Link>Articles</Link>
              { articleShow===true ? <div className='lg:absolute lg:left-0  lg:z-10 bg-white lg:w-[20vw]'>
                <div className='lg:flex lg:justify-between lg:items-center lg:p-2'>
                                        <h1 className='text-black lg:text-xl'>articles</h1>
                                        <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white lg:p-3 lg:min-w-[130px]'>go to articles</button>
                                    </div>
                                    <h1 className='bg-[#EEE] text-black p-2 font-thin'>popular article categories</h1>
                                    <ul>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>muscle building</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>fat loss </li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>for women</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>training</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>nutrition</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>supplements</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>motivation</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>view all</li></Link>
                                    </ul>
                </div>:""}
            </li>
            <li onMouseEnter={mouseEnter7} onMouseLeave={mouseLeave7} className='relative'><Link>Diet plan</Link>
            { dietShow===true ? <div className='lg:absolute lg:left-0  lg:z-10 bg-white lg:w-[20vw]'>
                <div className='lg:flex lg:justify-between lg:items-center lg:p-2'>
                                        <h1 className='text-black lg:text-xl'>Diet Plans</h1>
                                        <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white lg:p-3 lg:min-w-[130px]'>Go to Diet Plans</button>
                                    </div>
                                    <h1 className='bg-[#EEE] text-black p-2 font-thin'>popular Diet Plans</h1>
                                    <ul>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>clean eating</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>IIFYM & Flexible Dieting </li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Keto & Low Carb</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Carb Cycling</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Intermittent Fasting</li></Link>
                                       
                                    </ul>
                </div>:""}
            </li>
            <li onMouseEnter={mouseEnter8} onMouseLeave={mouseLeave8} className='relative'><Link>Exercises</Link>
            {exerciseShow ===true ?<div className='lg:absolute lg:left-0  lg:z-10 bg-white lg:w-[20vw]'>
                <div className='lg:flex lg:justify-between lg:items-center lg:p-2'>
                                        <h1 className='text-black lg:text-xl'>Exercises</h1>
                                        <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white lg:p-3 lg:min-w-[130px]'>Go to Exercises</button>
                                    </div>
                                    <h1 className='bg-[#EEE] text-black p-2 font-thin uppercase'>Exercises By Muscle Group</h1>
                                    <ul>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Chest Exercises</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Abs Exercises </li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Shoulder Exercises</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Biceps Exercises</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>View All</li></Link>
                                       
                                    </ul>
                                    <h1 className='bg-[#EEE] text-black p-2 font-thin uppercase'>most popular exercises</h1>
                                    <ul>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Military Press (AKA Overhead Press)</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Dumbbell Deadlift </li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Arnold Press</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Dumbbell Laterial Raises</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Bent Over Rows</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Dumbbell Pullover</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Stiff Leg Deadlift (AKA Romanian Deadlift)</li></Link>
                                       
                                    </ul>
                </div> :""}
            </li>
            <li onMouseEnter={mouseEnter9} onMouseLeave={mouseLeave9} className='relative'><Link>Recipes</Link>
            {recipesShow ===true ?<div className='lg:absolute lg:left-0  lg:z-10 bg-white lg:w-[20vw]'>
                <div className='lg:flex lg:justify-between lg:items-center lg:p-2'>
                                        <h1 className='text-black lg:text-xl'>Recipes</h1>
                                        <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white lg:p-3 lg:min-w-[130px]'>Go to Recipes</button>
                                    </div>
                                    <h1 className='bg-[#EEE] text-black p-2 font-thin'>Popular Recipe Categories</h1>
                                    <ul>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Protein Shake Recipes</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Protein Bar Recipes </li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>High Protein Recipes</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Low Carb Recipes</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Vegetarian Recipes</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>View All</li></Link>
                                       
                                    </ul>
                </div>:""}
            </li>
            <li onMouseEnter={mouseEnter10} onMouseLeave={mouseLeave10} className='relative'><Link>Tools</Link>
            {toolsShow===true ?    <div className='lg:absolute lg:left-0  lg:z-10 bg-white lg:w-[20vw]'>
                <div className='lg:flex lg:justify-between lg:items-center lg:p-2'>
                                        <h1 className='text-black lg:text-xl'>Tools</h1>
                                        <button  className='bg-[#059] drop-shadow-[1px_1px_0_#004a85] text-white lg:p-3 lg:min-w-[130px]'>Go to Tools</button>
                                    </div>
                                    <h1 className='bg-[#EEE] text-black p-2 font-thin'>Popular Tools</h1>
                                    <ul>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Bench Press Calculator</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>BMR + Daily Calorie Calculator </li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Bodyfat % Calculator</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Body Measurements Calculator</li></Link>
                                        <Link className='w-full flex text-[#3b6aa5] p-3 border border-b-[1px] hover:bg-[#f5f5f5] font-thin'><li>Bench Press Max Chart</li></Link>
                                       
                                    </ul>
                </div>  :""}
            </li>

           
        </ul>
    </div>

    <div className=' lg:flex lg:ms-5 lg:flex-col lg:justify-center lg:items-center lg:gap-2 hidden'>
        <p className='lg:text-white lg:text-sm'>7 days customer service</p>
        <div className=" lg:flex md:gap-2 bg-[rgb(51,99,179)] p-1 rounded-xl"> 
    <div className="lg:flex lg:gap-2 lg:items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3ZM12 17H14C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17Z"></path></svg><span className='text-white lg:whitespace-nowrap text-sm'>live chat</span></div>
    <div className='lg:flex lg:items-center lg:gap-1'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
    <span className="lg:text-sm text-white lg:whitespace-nowrap">1-111-111-1111</span>
    </div>
    </div>

    </div>
    <div className='lg:w-[20%] lg:flex lg:justify-center lg:gap-20 lg:items-center flex gap-4 me-1'>
    <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>

        <Link to={"/ShoppingCart"} className='lg:flex lg:gap-1 lg:flex-col lg:justify-center lg:items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
    <p className='text-white sm:text-sm lg:relative relative'><span className='sm:flex hidden'>cart</span>
               {token ? <p className='lg:absolute lg:bottom-10  left-2 lg:flex lg:justify-center lg:items-center text-white  lg:rounded-2xl lg:w-[24px] lg:text-md lg:border-lg:white lg:border-[1px] absolute bottom-5 bg-[#059] flex justify-center items-center  font-thin rounded-2xl w-[24px] text-sm border-white border-[1px]'>
                    {cartTotalQuantity} 
                </p>:""}
    </p>
    </Link>

    </div>
    <div className='relative'>
    <Link className='lg:flex xl:gap-1 lg:flex-col lg:justify-center lg:items-center ' onMouseEnter={mouseEnterLogin} onMouseLeave={mouseLeaveLogin} onClick={token ? "" : loginShowHandler }>
   {token ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 11V8L15 12L10 16V13H1V11H10ZM2.4578 15H4.58152C5.76829 17.9318 8.64262 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9H2.4578C3.73207 4.94289 7.52236 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.52236 22 3.73207 19.0571 2.4578 15Z"></path></svg>}
        <p className='text-white lg:text-sm sm:flex hidden'>{token? "Account" : "Login"}</p>
  
               
    </Link>
    {token && enterLogin===true?<div onMouseEnter={mouseEnterLogin} onMouseLeave={mouseLeaveLogin} className='bg-white sm:absolute sm:z-10 sm:w-[180px] sm:top-full sm:right-1 absolute top-full right-1  w-[150px] z-[99]'>
                <ul className='bg-white sm:p-2 sm:flex sm:flex-col sm:justify-center sm:items-start w-full flex flex-col gap-2 h-full p-2'>
                    <p className='text-lg text-[#059] capitalize sm:font-semibold border-b-[1px] sm:p-2 w-full h-auto font-bold '>welcome , {name}</p>
                    <Link><li className='text-[#059] sm:w-full  sm:p-2 border-b-2 w-full h-auto'>my account</li></Link>
                    <Link className='text-red-500 capitalize sm:p-2 w-full h-auto'  onClick={logoutHandler}><li >logout</li></Link>
                </ul>
                </div> :""}
    </div>
    </div>
              
   
    </div>
 
    {
        (loginShow ===false ) ? "" :
<div className='w-full h-full  relative'>
  <div className='sm:w-[25%] w-[90%] h-[300px]  p-3 bg-white ms-[5%] fixed z-20 sm:top-10 sm:left-[35%]'>

  <div className='flex justify-between items-center'>
    <h1 className='capitalize sm:text-xl text-2xl sm:font-semibold'>login</h1>
        <div className='sm:text-2xl cursor-pointer' onClick={closeLoginShow}>X</div>
    </div>
    <form>
    <label  className='capitalize font-thin text-sm block mt-2 mb-2'>email</label>
    <input required onChange={(e)=>setUser(e.target.value)}  autoFocus type='text' placeholder='username' className='border-solid border-[1px] border-[#ccc] p-2 w-full outline-none placeholder-[#bbb] placeholder-'></input>
    <label className='capitalize font-thin text-sm block mt-2 mb-2'>password</label>
    <input required onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password' className='border-solid border-[1px] border-[#ccc] p-2 w-full outline-none placeholder-[#bbb]'></input>
    </form>
    <div className='w-full flex justify-between items-center mt-3'>
            <Link to={"/CreateAccount"} className='w-1/2 h-[40px] flex justify-center items-center '><button className='w-[80%] h-full text-black font-thin bg-[#ddd] text-sm hover:bg-[#efefef] capitalize'>create account</button></Link>
            <div className='w-1/2 h-[40px] flex justify-center items-center'><button onClick={(e)=>loginHandler(e)} className='w-[80%] h-full text-white font-thin bg-[#059] text-sm border-[1px] border-solid border-[rgb(0,73,132)] hover:bg-[#204379] capitalize'>login</button></div>

    </div>
  </div>

  <div className='w-full bg-black opacity-50 z-10 h-dvh fixed top-0 bottom-0' onClick={closeLoginShow}></div>
</div>
}
    </>
  )
}
export default Header