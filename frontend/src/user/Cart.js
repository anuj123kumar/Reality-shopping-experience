import React from "react"
import Base from "../core/Base"
import './styles.css'
// import './cartCss.css'

const Cart = () => {
  return (
    <Base title='Cart Page'>
      <div className='CartContainer'>
        <div className='Header'>
          <h3 className='Heading'>Shopping Cart</h3>
          <h5 className='Action'>Remove all</h5>
        </div>
        <div className='Cart-Items'>
          <div className='image-box'>
            <img src='images/apple.png' style={{ height: "120px" }} />
          </div>
          <div className='about'>
            <h1 className='title'>Wooden Chair</h1>
            <h3 className='subtitle'>250mm</h3>
            <img src='images/veg.png' style={{ height: "30px" }} />
          </div>
          <div className='counter'>
            <div className='btn'>+</div>
            <div className='count'>2</div>
            <div className='btn'>-</div>
          </div>
          <div className='prices'>
            <div className='amount'>$29.99</div>
            <div className='save'>
              <u>Save for later</u>
            </div>
            <div className='remove'>
              <u>Remove</u>
            </div>
          </div>
        </div>
        <div className='Cart-Items pad'>
          <div className='image-box'>
            <img src='images/grapes.png' style={{ height: "120px" }} />
          </div>
          <div className='about'>
            <h1 className='title'>Morden Furniture</h1>
            <h3 className='subtitle'>1200mm</h3>
            <img src='images/veg.png' style={{ height: "30px" }} />
          </div>
          <div className='counter'>
            <div className='btn'>+</div>
            <div className='count'>1</div>
            <div className='btn'>-</div>
          </div>
          <div className='prices'>
            <div className='amount'>$39.19</div>
            <div className='save'>
              <u>Save for later</u>
            </div>
            <div className='remove'>
              <u>Remove</u>
            </div>
          </div>
        </div>
        <hr />
        <div className='checkout'>
          <div className='total'>
            <div>
              <div className='Subtotal'>Sub-Total</div>
              <div className='items'>2 items</div>
            </div>
            <div className='total-amount'>$6.18</div>
          </div>
          <button className='button'>Checkout</button>
        </div>
      </div>
    </Base>
  )
}

export default Cart
