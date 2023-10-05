import classes from './Cart.module.css'
import CartContext from '../../Store/CartContext'
import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import Modal from '../UI/Modal' 
import { Fragment } from "react"
const Cart=(props)=>{
    const cartCtx=useContext(CartContext)
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems=cartCtx.items.length>0
    const cartItemRemover=(id)=>{
        cartCtx.removeItem(id)
            }
            const cartItemAdd=(item)=>{
                cartCtx.addItem(item)
            }
    const cartItems=(
        <ul className={classes['cart-items']}>{cartCtx.items.map((item)=>(
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.amount} onRemove={cartItemRemover.bind(null,item.id)} onAdd={cartItemAdd.bind(null,item)}></CartItem> )

            )
        }</ul>
    )
    
    return(
        <Modal onClose={props.onClose}>
           
            {cartItems}
             
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                         <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                        { hasItems&&
                        <button className={classes.button}>Order</button>
                        }
                    </div>
                     
                  </Modal>  
    )
}
export default Cart

// import { useContext } from 'react'
// import classes from './Cart.module.css'
// import CartContext from '../../Store/CartContext'
// import Modal from '../UI/Modal'
// import CartItem from '../CartItem/CartItem'
// const Cart=(props)=>{
//     const cartCtx=useContext(CartContext)
//     const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
//     const hasItems=cartCtx.items.length>0
//     //function
//     const cartItemRemover=(id)=>{
// cartCtx.removeItem(id)
//     }
//     const cartItemAdd=(item)=>{
//         cartCtx.addItem(item)
//     }
//     // const cartItems=(<ul className={classes['cart-items']}>{[{id:'c1',name:'Sushi',amount:2,price:12.99}].map((item)=>
//     //  (   <li key={item.id}>{item.name}</li>)
//     // )}</ul>)
//         const cartItems=(<ul className={classes['cart-items']}>{cartCtx.items.map((item)=>
//       <CartItem key={item.id} name={item.name} amount={item.amount} price={item.amount} onRemove={cartItemRemover.bind(null,item.id)} onAdd={cartItemAdd.bind(null,item)}/>
//     )}</ul>)
//     return(
//         <Modal onClose={props.onClose}>
           
//             {cartItems}
//             <div className={classes.total}>
//                 <span>Total Amount</span>
//                 <span>{totalAmount}</span>
//             </div>
//             <div className={classes.actions}>
//                 <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
//                { hasItems&&<button className={classes.button}>Order</button>}
//             </div>
             
//           </Modal>  
//     )
// }
// export default Cart