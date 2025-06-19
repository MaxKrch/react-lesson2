import { render, screen } from '@testing-library/react';
import ShopItem from './shop-item'; 
import { products } from '../../const';

describe(`Component: ShopItem`, () => {
    it(`should render correctly`, () => {
        const product = products[1];
        const expectedPrice = `$${product.price}`;

        render(<ShopItem product={product} />);

        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText(product.color)).toBeInTheDocument();
        expect(screen.getByText(expectedPrice)).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute(
            "src",
            product.img
        )
    })
})