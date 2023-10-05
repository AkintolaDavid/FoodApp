import Header from "./component/Layout/Header";
import { useState } from "react";
import Meals from "./component/Meals/Meals";
import CartProvider from "./Store/CartProvider";
import Cart from "./component/Cart/Cart";
const App=()=> {
  const [showCart,setShowCart]=useState(false)
 const showCartHandler=()=>{
   setShowCart(true)
 }
 const hideCartHandler=()=>{
  setShowCart(false)
}
  return (
     
    
        <CartProvider>
          { showCart && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
       <main>
         <Meals/>
       </main>
       </CartProvider>
        
   
  );
}

export default App;
// import Header from "./component/Layout/Header";
// import { useState } from "react";
// import CartProvider from "./Store/CartProvider";
// import Meals from "./component/Meals/Meals";
// import Cart from "./component/Cart/Cart";
// function App() {
//   const [showCart,setShowCart]=useState(false)
//   const showCartHandler=()=>{
//     setShowCart(true)
//   }
//   const hideCartHandler=()=>{
//     setShowCart(false)
//   }
//   return (
     
//      <CartProvider>
//       { showCart && <Cart onClose={hideCartHandler}/>}
//         <Header onShowCart={showCartHandler} ></Header>
//       <main>
// <Meals/>
//       </main>
//      </CartProvider>
   
//   );
// }

// export default App;
