import { FC } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Headphone } from "../lib/headphones";
import CartCard from "./CartCard";


interface CartProps { 
    cartList: Headphone[]
}


const Cart: FC<CartProps> = ({ cartList }) => {
    return (
        <div className="Cart">
            <div id="cartHeader"><Header /></div>
            <div className="cart">
                <p id="cartText">Корзина</p>
                <div className="cartContent">
                    <CartCard cartList={cartList}/>
                    <div className="order">
                        <div className="total">
                            <p id="total">ИТОГО</p>
                            <p>₽ {cartList.length === 0 ? 0 : cartList.reduce((a, el) => a + el.price, 0)}</p>
                        </div>
                        <button id="orderBtn"><p id="orderBtnText">Перейти к оформлению</p></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Cart;