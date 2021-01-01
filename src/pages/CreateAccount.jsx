import { useState } from "react"
import { Layout } from "../components/Layout"

const CreateAccount =()=>{

   const [gender1,setGender1]=useState()
   const [gender2,setGender2]=useState()
    console.log({"this is gender 1" : gender1});
    
  
    return (
<Layout>
<div className="w-full bg-[#eee]">
        <div className="sm:w-[60%] bg-white sm:p-10 m-auto">

        <h1 className="sm:w-full capitalize font-bold text-xl w-full text-center">create an account </h1>

        <form className="flex flex-col gap-2 w-1/2 mt-5">
                <input className="w-[80%] border-solid border-[1px] p-2 rounded-sm border-[#ddd] mb-3" type="text" placeholder="First Name"></input>
                <input className="w-[80%] border-solid border-[1px] p-2 rounded-sm border-[#ddd] mb-3" type="text"  placeholder="Last Name"></input>
                <input className="w-[80%] border-solid border-[1px] p-2 rounded-sm border-[#ddd] mb-3" type="email"  placeholder="Email Address"></input>
                <div  className="w-[80%] border-solid border-[1px] p-2 rounded-sm border-[#ddd] mb-3" placeholder="Gender">
                   
                    <select>
                               
                            <option   value="male">male</option>
                            <option  value="female">female</option>

                    </select>
                </div>
                <input></input>
                <input></input>
                <input></input>

        </form>


        </div>

</div>
</Layout>
    )
}

export default CreateAccount