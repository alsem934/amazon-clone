import React, { useContext } from 'react'
import { DataContext } from '../../Component/DataProvider/DataProvider'
import ProductCard from '../../Component/Product/ProductCard'
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat'
import classes from './Carts.module.css'
import { Link } from 'react-router-dom'
import LayOut from '../../Component/Layout/Layout'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Type } from '../../Utility/action.type'
function Cart() {

  const {state, dispatch}= useContext(DataContext)

  const {basket} =state
  // console.log(basket)
  const total = basket.reduce((amount,item)=>{
    return item.price *item.amount  + amount
  },0)


  const increment =(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement =(id)=>{
    dispatch({
      type :Type.REMOVE_FROM_BASKET,
      id
    })
  }




  // console.log(state)
  return (
    <LayOut>
      <section className={classes.container} >
      <div className={classes.cart__container}>
      <h2>Hello</h2>
          <h3>Your shopping basket </h3>
          <hr />
          {
            basket?.length==0?(<p>Opps ! No item in your cart</p>):(
              basket?.map((item,i)=>{
               return <section className={classes.cart_product}>
     <ProductCard
               key={i}
                 product={item}
                 renderDesc={true}
                 renderAdd={false}
                 flex={true}
               />
                  <div className={classes.btn_container} >
                    <button className={classes.btn} onClick={()=>increment(item)}>
<IoIosArrowUp size={20}/>
                    </button>
                    <span>{item.amount}</span>
                    <button className={classes.btn} onClick={()=>decrement(item.id)}>
<IoIosArrowDown size={20}/>
                    </button>
                    </div>
               </section>
              })
            )
          }

      </div>

{basket?.length !==0&&(
   <div className={classes.subtotal}>
    <div>
      <p>Subtotal ({basket?.length} items)</p>
      <CurrencyFormat amount={total}/>
    </div>
    <span>
      <input type="checkbox" />
      <small>This order contains a gift</small>
    </span>
    <Link to="/payments">Continue to checkout</Link>
   </div>

)}
     </section>
   
   </LayOut>
   
  )
}

export default Cart
