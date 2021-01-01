import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({

    name:"cart",
    initialState:{
        cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
        cartTotalQuantity:localStorage.getItem("cartQuantity")?JSON.parse(localStorage.getItem("cartQuantity")):"" ,
        cartTotalAmount:0

    },

    reducers:{
        addToCart:(state,action)=>{

          const itemIndex = state.cartItems.findIndex(item=>JSON.stringify(item.title)===JSON.stringify(action.payload.title) && item.id===action.payload.id)
         
          if(itemIndex>=0 ){
       state.cartItems[itemIndex].cartQuantity=1;
      
    
          } else{ 
            const tempProduct={...action.payload,cartQuantity:1}
            state.cartItems.push(tempProduct)
            toast.success(`${action.payload.title} added to cart` ,{
              position:"bottom-left"
            })
          }
           localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        increaseQuantity:(state,action)=>{
          const itemIndex = state.cartItems.findIndex(item=>JSON.stringify(item.title)===JSON.stringify(action.payload.title))
          
          
          if(itemIndex>=0 && JSON.stringify(state.cartItems[itemIndex].title)===JSON.stringify(action.payload.title)){
       state.cartItems[itemIndex].cartQuantity+=1;
       toast.success(`${state.cartItems[itemIndex].cartQuantity} ${action.payload.title} added to cart` ,{
        position:"bottom-left"
      })
          } else{ 
            const tempProduct={...action.payload,cartQuantity:1}
            state.cartItems.push(tempProduct)
          }
          localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },

        decreaseQuantity:(state,action)=>{
          const itemIndex = state.cartItems.findIndex(item=>JSON.stringify(item.title)===JSON.stringify(action.payload.title))
         
          if(state.cartItems[itemIndex].cartQuantity>1){
       state.cartItems[itemIndex].cartQuantity-=1;
      
          } else{ 
            if(state.cartItems[itemIndex].cartQuantity===1)
            {
           const newCart= state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
              state.cartItems= newCart
            }
          }
          localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        }
        ,
        removeItem:(state,action)=>{

         const newCart = state.cartItems.filter(item=>item.id!==action.payload.id)
        // itemRemoved  defined just for toast message
         const itemRemoved = state.cartItems.find(item=>item.id===action.payload.id)
         toast.error(`${itemRemoved.title} removed from your cart`,{
          position:"bottom-left"
         })
         state.cartItems=newCart
         localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        deleteCart:(state,action)=>{

          state.cartItems=[]
          localStorage.setItem("cartItems",state.cartItems)
        },
        getTotals(state,action){
          let {total,quantity} =  state.cartItems.reduce((cartTotal,cartItem)=>{
             const {price,cartQuantity}=cartItem;
     
             console.log({"this is price":price});
             console.log({"this is cart quantity":cartQuantity});
             
             const itemTotal = price * cartQuantity
             
             cartTotal.total+=itemTotal
             cartTotal.quantity+=cartQuantity
             return cartTotal
            },
            {
             total:0,
             quantity:0
            })
            state.cartTotalQuantity=quantity
            state.cartTotalAmount=total
            localStorage.setItem("cartQuantity",state.cartTotalQuantity)
          },
         
        

    }

})
export default cartSlice.reducer;

export const {addToCart,increaseQuantity,decreaseQuantity,removeItem,deleteCart,getTotals} = cartSlice.actions