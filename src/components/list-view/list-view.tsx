import ShopItem from "../shop-item";
import type { ListViewProps } from "./list-view.type";

function ListViews ({products}: ListViewProps) {
    return(
        <ul className="product-list product-list-view">
            {
                products.map(product => (
                    <ShopItem
                        key={`${product.name}-${product.color}`} 
                        product={product}
                    />
                ))
            }
            </ul>
    )
}

export default ListViews;