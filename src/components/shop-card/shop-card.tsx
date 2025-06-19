// Компоненту CardsView от Store мы передаём свойство cards — массив с данными, 
// каждый элемент из которого затем уже отображается с помощью карточки товара ShopCard.

import type { ShopCardProps } from "./shop-card.type";


// То есть CardsView отображает много карточек ShopCard. На один товар — одна карточка ShopCard.

function ShopCard({product}: ShopCardProps) {
    const { name, color, price, img } = product;

    return(
        <div className="card-container shop-card-container">            
            <div className="card-img__container shop-card-img__container">
                <img
                    className="card-img__img shop-card-img__img" 
                    src={img} 
                    alt={name} 
                />
            </div>
            <div className="shop-card-data__container">
                <h2 className="card-name shop-card-name">
                    {name}
                </h2>
                <p className="card-color shop-card-color">
                    {color}
                </p>
                <div className="shop-card-pay-block">
                    <p className="card-price shop-card-price">
                        ${price}
                    </p>
                    <button className="card-button shop-card-button">
                        Add to card
                    </button>
                </div>
            </div>
        </div>     
    )
    
}

export default ShopCard;