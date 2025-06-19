import { render, screen } from '@testing-library/react';
import { products } from '../../const';
import CardsView from './cards-view';

describe(`Component: CardsView`, () => {
    it(`should render correctly count cards`, () => {
        render(<CardsView products={products} />);

        products.forEach(product => {
            expect(screen.getAllByText(product.name).length).toBeGreaterThan(0)
        })
    })
})