// Компоненту ListView от Store мы передаём всего одно свойство items — массив с данными, 
// каждый элемент из которого затем уже отображается с помощью ShopItem для товаров, которые мы хотим отобразить.

import type { ShopItemProps } from "./shop-item.type";

// То есть ListView отображает много ShopItem. На один товар — один ShopItem.

function ShopItem({product}: ShopItemProps) {
    const { name, color, img, price } = product;
    return (
        <li className="card-container shop-item-container">            
            <div className="card-img__container shop-item-img__container">
                <img
                    className="card-img__img shop-item-img__img" 
                    src={img} 
                    alt={name} 
                />
            </div>
            <h2 className="card-name shop-item-name">
                {name}
            </h2>
            <p className="card-color shop-item-color">
                {color}
            </p>
            <p className="card-price shop-item-price">
                ${price}
            </p>
            <div className="shop-item-button__container">
                <button className="card-button shop-item-button">
                    Add to card
                </button>
            </div>
        </li>   
    )  
}

export default ShopItem;