import { Fragment } from "react"
import classes from './Header.module.css'
import image  from '../../Assets/meals.jpg'
import HeaderCardButton from "./HeaderCardButton"
const Header=(props)=>{
return(
   <Fragment>
       <header className={classes.header}>
           <h1>DAVID MEALS</h1>
           <HeaderCardButton onClick={props.onShowCart}></HeaderCardButton>
       </header>
      <div className={classes["main-image"]}>
          <img src={image}/>
          </div>
   </Fragment>
)
}
export default Header
// import { Fragment } from "react"
// import image from '../../Assets/meals.jpg'
// import classes from './Header.module.css'
// import HeaderCardButton from "./HeaderCardButton"
// const Header=(props)=>{
// return(
//     <Fragment>
//         <header className={classes.header}>
//             <h1>REACT Meals</h1>
//             <HeaderCardButton onClick={props.onShowCart}>cart</HeaderCardButton>
//         </header>
//         <div className={classes["main-image"]}>
// <img src={image}/>
//         </div>
//     </Fragment>
// )
// }
// export default Header