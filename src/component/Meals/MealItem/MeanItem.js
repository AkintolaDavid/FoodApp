import { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm/MealItemForm'
import CartContext from '../../../Store/CartContext'
const MealItem=(props)=>{
    const cartCtx=useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`
    const addToCartHandler=(amount)=>{
        cartCtx.addItem({
                id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
        })
    }
return(
    <li className={classes.meal}>
<div>
<h3>{props.name}</h3>
<div className={classes.description}>{props.description}</div>
<div className={classes.price}>{price}</div>
</div>
<div>
<MealItemForm onAddToCart={addToCartHandler}/>
</div>
    </li>
)
}
export default MealItem
// import { useContext } from 'react'
// import classes from './MealItem.module.css'
// import MealItemForm from './MealItemForm/MealItemForm'
// import CartContext from '../../../Store/CartContext'
// const MealItem=(props)=>{
// const cartCtx=useContext(CartContext)
// // console.log(cartCtx)
//     const price=`$${props.price.toFixed(2)}`
//     const addToCartHandler=(amount)=>{
// cartCtx.addItem({
//     id:props.id,
//     name:props.name,
//     amount:amount,
//     price:props.price
// })
//     }
//     return(<li className={classes.meal}>
// <div><h3>{props.name}</h3>
// <div className={classes.description}>{props.description}</div>
// <div className={classes.price}>{price}</div></div>
// <div>
// <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
// </div>
//     </li>)
// }
// export default MealItem