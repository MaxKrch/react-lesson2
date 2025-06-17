import { render, screen } from '@testing-library/react';
import ProjectItem from './project-item';
 
describe('Component: ProjectItem', () => {
    const image = {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
    }

    it(`should render correctly`, () => {
        render(<ProjectItem {...image} />)

        expect(screen.getByRole(`img`)).toBeInTheDocument()
        expect(screen.getByAltText(image.category));
        expect(screen.getByRole(`img`)).toHaveAttribute(
            `src`,
            image.img
        )
    })
})