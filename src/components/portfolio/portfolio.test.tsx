import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Portfolio from './portfolio';
import type { Project } from '../../types';

const mockProjects: Project[] = [{
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
  category: "Flayers"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
}]

const mockProjectsBusinesCards = mockProjects.filter(project => project.category === "Business Cards")

describe('Portfolio', () => {
  test('should render correctly', () => {
    render(<Portfolio projects={mockProjects} />);

    expect(screen.getByText('Websites')).toBeInTheDocument();
    expect(screen.getByText('Business Cards')).toBeInTheDocument();
  });

  test('displays projects for the selected filter', () => {
    render(<Portfolio projects={mockProjects} />);
        
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockProjects.length);
    expect(images[0]).toHaveAttribute(
        'src',
        mockProjects[0].img 
    );
    expect(images[1]).toHaveAttribute(
        'src',
        mockProjects[1].img 
    );
  });

  test('changes filter when toolbar item is clicked', async () => {
    render(<Portfolio projects={mockProjects} />);
    
    await userEvent.click(screen.getByText('Business Cards'));


    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockProjectsBusinesCards.length);
    expect(images[0]).toHaveAttribute(
        'src', 
        mockProjectsBusinesCards[0].img     
    );
  });
});