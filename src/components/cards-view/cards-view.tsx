import ShopCard from "../shop-card";
import type { CardsViewProps } from "./cards-view.type";

function CardsView ({products}: CardsViewProps) {
    return(
        <ul className="product-list product-cards-view">
            {
                products.map(product => (
                    <ShopCard
                        key={`${product.name}-${product.color}`} 
                        product={product}
                    />
                ))
            }
        </ul>
    )
}

export default CardsView;