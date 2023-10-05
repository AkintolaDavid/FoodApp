import classes from './HeaderCardButton.module.css'
import CartContext from '../../Store/CartContext'
import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
const HeaderCardButton=(props)=>{
    const cartCtx=useContext(CartContext)
    const {items}=cartCtx
    const numberOfCartItem=items.reduce((curNumber,item)=>{
                return curNumber+item.amount
            },0)
return(
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
)
}
export default HeaderCardButton

// import classes from './HeaderCardButton.module.css'
// import CartContext from '../../Store/CartContext'
// import CartIcon from '../Cart/CartIcon'
// import { useContext } from 'react'
// import { useEffect,useState } from 'react'
// const HeaderCardButton=(props)=>{
//    const [btnAnimated,setBtnAimated]=useState(false)
//     const cartCtx=useContext(CartContext)
//     const {items}=cartCtx
//     const numberOfCartItem=items.reduce((curNumber,item)=>{
//         return curNumber+item.amount
//     },0)
    
//     const btnClasses=`${classes.button} ${btnAnimated ? classes.bump:""}`
//     useEffect(()=>{
//         if(items.length===0){
// setBtnAimated(true)
// const timer=setTimeout(()=>{
//     setBtnAimated(false)
// },300)

// return()=>{
//     clearTimeout(timer)
// }}
//     },[items])
// return(<button onClick={props.onClick} className={btnClasses}>
// <span className={classes.icon}><CartIcon/></span>
// <span>your cart</span>
// <span className={classes.badge}>{numberOfCartItem}</span>
// </button>)
// }
// export default HeaderCardButton