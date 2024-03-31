import { FC } from "react"
import { Headphone } from "../lib/headphones";


interface HeadphoneProps { 
    hp: Headphone,
    clickHandler: (hp: Headphone) => any;
}


const Card: FC<HeadphoneProps> = ({ hp , clickHandler }) => {
    return (
        <div className="card">
            <div className="productPic">
                <img src={hp.img} alt={hp.title} />
            </div>
            <div className="productInfo">
                <div className="info">
                    <p id="title">{hp.title}</p>
                    <p id="price">{hp.price} ₽</p>
                </div>
                <div className="info">
                    <p id="rate">
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z" fill="#FFCE7F"/>
                        </svg>
                        {hp.rate}
                    </p>
                    <button id="buy" onClick={() => clickHandler(hp)}>Купить</button> 
                </div>
            </div>
        </div>
    )
}

export default Card;