import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event'
import Toolbar from './toolbar';
import { vi } from 'vitest';

describe('Toolbar component', () => {
    const filters = [
        "All",
        "Websites",
        "Flayers",
        "Business Cards",
    ] as const
    const selected = 'Websites';
    const onSelectFilter = vi.fn();

    beforeEach(() => {
        onSelectFilter.mockClear();
    });

    it('renders all filters', () => {
        render(
            <Toolbar 
                filters={filters} 
                selected={selected} 
                onSelectFilter={onSelectFilter} 
            />
        );

        filters.forEach(filter => {
            expect(screen.getByText(filter)).toBeInTheDocument();
        });
    });

    it('highlights the selected filter', () => {
        render(
            <Toolbar 
                filters={filters} 
                selected={selected} 
                onSelectFilter={onSelectFilter} 
            />
        );

        const selectedItem = screen.getByText(selected);
        expect(selectedItem).toHaveClass('portfolio-toolbar__item_active');
    });

    it('calls onSelectFilter when a filter is clicked', async () => {
        render(
            <Toolbar 
                filters={filters} 
                selected={selected} 
                onSelectFilter={onSelectFilter} 
            />
        );

        const item = screen.getByText('Business Cards');
        await userEvent.click(item);

        expect(onSelectFilter).toHaveBeenCalledWith('Business Cards');
    });
});