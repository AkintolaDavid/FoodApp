
import React from "react";
const cartContext=React.createContext({
    item:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})
export default cartContext
// const CartContext=React.createContext({
//     items:[],
//     totalAmount:0,
//     addItem:(item)=>{},
//     removeItem:(id)=>{}
// })
// export default CartContext