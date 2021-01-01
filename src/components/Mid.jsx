import { Link } from "react-router-dom"
import deals from "../assets/goals_slider_desktop.webp"
const Mid =()=>{

    return(
        <>
<div className="relative">

   <div className="bg-[url('/src/assets/woman.jpg')] w-full sm:min-h-[500px] min-h-[700px] bg-cover bg-center"></div>
    
    <div className="absolute top-0 left-0 bg-[rgba(23,20,20,0.5)] w-full h-[700px] sm:h-[500px] flex flex-col justify-start items-center  ">
            <h1 className="sm:mt-20 mt-10 mb-10 leading-[80px] w-full text-center text-white sm:text-[80px] text-7xl sm:font-extrabold font-bold">Welcome to <p>Muscle & Strength</p></h1>
            <p className="text-center text-white text-2xl font-light leading-10">We provide the tools you need to build the body you want. All Free.</p>

            <button className="whitespace-nowrap border-solid border-[#004780] border-[1px] text-white bg-[rgb(42,85,153)] sm:p-4 sm:w-[200px] w-[200px] p-2 font-sans text-2xl font-[24px] sm:mt-10 mt-10">Learn More</button>
    </div>


</div>
{/* icons */}
<div className="w-full bg-[rgb(245,245,245)] ">
        <ul className="w-full sm:flex sm:justify-between sm:ps-20 sm:pe-20 sm:pt-5 sm:pb-5 flex justify-between p-1 mt-2">
<Link>
            <li className="flex flex-col justif-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(42,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 2V4H17V7C18.6569 7 20 8.34315 20 10V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V10C4 8.34315 5.34315 7 7 7V4H5V2H19ZM17 9H7C6.44772 9 6 9.44772 6 10V20H18V10C18 9.44772 17.5523 9 17 9ZM13 11V13H15V15H12.999L13 17H11L10.999 15H9V13H11V11H13ZM15 4H9V7H15V4Z"></path></svg>
            <p className="sm:text-lg text-sm text-[rgb(170,170,170)] font-light">store</p></li>
           </Link>
                <Link> <li className="flex flex-col justif-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(42,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14.0004 6C14.0004 7.10457 13.1049 8 12.0004 8C10.8958 8 10.0004 7.10457 10.0004 6C10.0004 4.89543 10.8958 4 12.0004 4C13.1049 4 14.0004 4.89543 14.0004 6ZM15.4652 8C15.8056 7.41165 16.0004 6.72857 16.0004 6C16.0004 3.79086 14.2095 2 12.0004 2C9.79122 2 8.00036 3.79086 8.00036 6C8.00036 6.72857 8.19515 7.41165 8.53549 8H5.06615C4.57888 8 4.16255 8.3512 4.08045 8.8315L2.2001 19.8315C2.0957 20.4423 2.56618 21 3.18581 21H20.8149C21.4345 21 21.905 20.4423 21.8006 19.8315L19.9203 8.8315C19.8382 8.3512 19.4218 8 18.9346 8H15.4652ZM12.0004 10H18.091L19.6295 19H4.37125L5.90971 10H12.0004Z"></path></svg><p className="sm:text-lg text-sm text-[rgb(170,170,170)] font-light" > Workouts</p></li></Link>
            <Link>
            <li className="flex flex-col justif-center items-center">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 width="36px" height="36px" viewBox="0 0 30 32" enable-background="new 0 0 30 32" >
<g>
	<path fill="rgba(42,85,153,1)" d="M23.246,20.658c0.107-0.255-0.012-0.548-0.267-0.655c-0.253-0.104-0.548,0.012-0.655,0.267
		c-0.725,1.719-2.395,2.829-4.253,2.829c-1.023,0-1.992-0.329-2.801-0.95c-0.219-0.17-0.533-0.126-0.701,0.092
		c-0.168,0.22-0.127,0.533,0.092,0.701c0.986,0.757,2.166,1.157,3.411,1.157C20.333,24.099,22.364,22.748,23.246,20.658z"/>
	<path stroke="rgba(42,85,153,1)" stroke-width="1" fill="rgba(42,85,153,1)" d="M21.751,4.394c-0.106-0.102-2.649-2.513-5.84-3.569l-0.434-0.198c-2.836-1.295-6.209-0.522-8.202,1.88
		C6.97,2.874,6.828,3.339,6.874,3.815C6.92,4.291,7.148,4.719,7.517,5.021C7.57,5.064,7.593,5.136,7.574,5.202
		C7.541,5.318,7.525,5.436,7.528,5.553c0.062,2.408,1.993,4.294,4.375,4.294h0c0.692-0.016,2.126-0.412,2.689-2.279
		c0.135-0.45,0.251-0.756,0.343-0.962c0.207,3.003,1.843,5.742,3.332,7.65c-0.234-0.036-0.472-0.054-0.712-0.054
		c-1.894,0-3.591,1.128-4.353,2.819c-1.552-1.185-3.448-1.829-5.414-1.829c-1.87,0-3.7,0.593-5.212,1.681
		C2.09,16.231,1.326,15.841,0.5,15.841c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.64,0,1.22,0.381,1.477,0.971
		c0.062,0.145,0.189,0.25,0.342,0.287c0.152,0.035,0.313,0,0.435-0.101c1.416-1.164,3.204-1.806,5.037-1.806
		c1.963,0,3.848,0.725,5.308,2.039c0.129,0.117,0.311,0.157,0.476,0.108c0.167-0.049,0.296-0.181,0.341-0.349
		c0.447-1.642,1.944-2.789,3.642-2.789c0.728,0,1.427,0.21,2.023,0.59c0.653,0.7,1.127,1.12,1.192,1.177
		c0.188,0.165,0.471,0.164,0.66-0.001c0.188-0.166,0.225-0.446,0.084-0.654c-0.34-0.506-0.767-0.934-1.253-1.269
		c-1.579-1.721-4.212-5.134-4.355-8.873c-0.028-0.121-0.11-0.396-0.281-0.617c-0.031-0.166-0.138-0.315-0.308-0.378
		c-0.089-0.033-2.201-0.797-4.301,0.485c-0.235,0.144-0.31,0.451-0.166,0.688c0.094,0.154,0.259,0.239,0.427,0.239
		c0.089,0,0.179-0.023,0.26-0.073c0.963-0.588,1.938-0.63,2.604-0.562c-0.17,0.32-0.335,0.753-0.507,1.325
		c-0.466,1.545-1.563,1.55-1.711,1.568c-1.856,0-3.349-1.458-3.389-3.372c0.127-0.449-0.023-0.931-0.385-1.228
		c-0.162-0.132-0.262-0.32-0.282-0.528C7.849,3.51,7.912,3.306,8.045,3.145c1.706-2.057,4.59-2.72,7.017-1.608l0.484,0.218
		c3.022,1.003,5.49,3.339,5.5,3.348c7.183,7.477,7.881,14.339,7.948,15.554c-3.24,3.386-7.764,5.324-12.445,5.324
		c-2.16,0-4.266-0.396-6.259-1.176c-0.153-0.06-0.327,0.025-0.462,0.12c-0.137,0.093-0.217,0.314-0.217,0.479
		C9.609,28.489,7.107,31,4.032,31c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c3.434,0,6.261-2.652,6.553-6.021
		c1.913,0.665,3.916,1.001,5.963,1.001c5.026,0,9.88-2.111,13.317-5.792C29.951,21.096,30,20.976,30,20.85
		C30.002,20.53,29.95,12.928,21.751,4.394z"/>
</g>
</svg>
            <p className="sm:text-lg text-sm text-[rgb(170,170,170)] font-light">Exersices</p></li>
            </Link>

            <Link>
            <li className="flex flex-col justif-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(42,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path></svg>
            <p className="sm:text-lg text-sm text-[rgb(170,170,170)] font-light">Articles</p></li>
            </Link>
            <Link>
            <li className="flex flex-col justif-center items-center">
            <svg fill="#2a5599" height="36px" width="36px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.00 512.00" stroke="#2a5599" stroke-width="0.0051199900000000005" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.0239980000000002"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M324.799,68.799c-103.222,0-187.2,83.978-187.2,187.2s83.978,187.2,187.2,187.2s187.2-83.978,187.2-187.2 S428.022,68.799,324.799,68.799z M324.799,407.169c-83.354,0-151.168-67.814-151.168-151.168s67.814-151.17,151.168-151.17 s151.168,67.814,151.168,151.168S408.154,407.169,324.799,407.169z"></path> </g> </g> <g> <g> <path d="M324.799,148.019c-59.541,0-107.981,48.44-107.981,107.981s48.44,107.981,107.981,107.981S432.78,315.54,432.78,255.999 S384.34,148.019,324.799,148.019z M324.799,327.95c-39.673,0-71.949-32.276-71.949-71.949s32.276-71.949,71.949-71.949 c39.673,0,71.949,32.276,71.949,71.949S364.472,327.95,324.799,327.95z"></path> </g> </g> <g> <g> <path d="M110.491,68.799c-9.95,0-18.016,8.066-18.016,18.016v96.161H81.959V86.815c0-9.95-8.066-18.016-18.016-18.016 c-9.95,0-18.016,8.066-18.016,18.016v96.161h-9.896V86.815c0-9.95-8.066-18.016-18.016-18.016S0,76.866,0,86.815v99.764 c0,17.881,14.547,32.428,32.428,32.428h12.298v206.175c0,9.95,8.066,18.016,18.016,18.016s18.016-8.066,18.016-18.016V219.009 h15.321c17.881,0,32.428-14.547,32.428-32.428V86.815C128.507,76.866,120.441,68.799,110.491,68.799z"></path> </g> </g> </g></svg><p className="sm:text-lg text-sm text-[rgb(170,170,170)] font-light">Diet Plans</p></li>
            </Link>
            <Link>
            <li className="flex flex-col justif-center items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(42,85,153,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2ZM5 4V20H19V4H5ZM7 6H17V10H7V6ZM7 12H9V14H7V12ZM7 16H9V18H7V16ZM11 12H13V14H11V12ZM11 16H13V18H11V16ZM15 12H17V18H15V12Z"></path></svg><p className="sm:text-lg text-sm text-[rgb(170,170,170)] font-light">Tools</p></li>
            </Link>
            
            
        </ul>

</div>

{/* deals */}
<section className="sm:w-[95%] m-auto flex justify-center items-center p-3">
<Link>
        <img className="bg-cover" src={deals} alt="deals"/>
</Link>
</section>
    </>
    )
}

export default Mid