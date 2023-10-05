import { useRef,useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../../UI/Input'
const MealItemForm=(props)=>{
    const[numberValid,setNumberValid]=useState(false)
    const amountInputRef=useRef()
    const submitHandler=(event)=>{
        event.preventDefault()
        const enteredAmount=amountInputRef.current.defaultValue
        const enteredAmountNumber=+enteredAmount
        if(enteredAmount.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>5){
            setNumberValid(true)
            return
        }props.onAddToCart(enteredAmountNumber)
    }
return(
    <form className={classes.form} onSubmit={submitHandler}>
        <Input
        ref={amountInputRef}
       input={{  id:'amount',type:'number',min:'1',max:'5',step:'1',defaultValue:'1'}}
       label='amount'/>
        <button>+ADD</button>
        {numberValid &&<p>PLEASE ENTER A VALID NUMBER</p>}
    </form>
)
}
export default MealItemForm

// import { useRef,useState } from 'react'
// import classes from './MealItemForm.module.css'
// import Input from '../../../UI/Input'
// const MealItemForm=(props)=>{
//     const[numberValid,setNumberValid]=useState(false)
//     const amountInputRef=useRef()
//     const submitHandler=(event)=>{
// event.preventDefault()
// const enteredAmount=amountIn putRef.current.value
// const enteredAmountNumber= +enteredAmount
// if(enteredAmount.trim().length===0 || enteredAmountNumber<1||enteredAmountNumber>5){
//     setNumberValid(true)
//     return
// }props.onAddToCart(enteredAmountNumber)
//     }
// return(
//     <form className={classes.form} onSubmit={submitHandler}>
//         <Input ref={amountInputRef} label='amount' input={{
//             id:'amount',type:'number',min:'1',max:'5',step:'1',defaultValue:'1'
//          }} />
//         <button>+ADD</button>
//         {numberValid &&<p>PLEASE ENTER A VALID NUMBER</p>}
//     </form>
// )
// }
// export default MealItemForm
