import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import DropdownList from "./dropdown-list";
import { menuItems } from "../../const";
import { vi } from "vitest";

describe("Component: DropdownList", () => {
    const onClickMock = vi.fn()
    
    beforeEach(() => {
        onClickMock.mockClear()
    })

    it("should renders all items", () => {
        render(
            <DropdownList 
                items={menuItems}
                onClick={onClickMock}        
            />
        );
        menuItems.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it("should calls onClick and sets active item on click", async () => {
        render(
            <DropdownList 
                items={menuItems} 
                onClick={onClickMock} 
            />
        );

        const firstItem = screen.getByText(menuItems[0]).closest(`li`)!;
        
        await userEvent.click(firstItem);

        expect(onClickMock).toHaveBeenCalledTimes(1);
        expect(firstItem).toHaveClass("active");
    });

    it("should only one item is active at a time", async () => {
        render(
            <DropdownList 
                items={menuItems} 
                onClick={() => {}}
            />
        );

        const firstItem = screen.getByText(menuItems[0]).closest(`li`)!;
        const secondItem = screen.getByText(menuItems[1]).closest(`li`)!;

        await userEvent.click(firstItem);
        expect(firstItem).toHaveClass("active");
        expect(secondItem).not.toHaveClass("active");

        await userEvent.click(secondItem);
        expect(secondItem).toHaveClass("active");
        expect(firstItem).not.toHaveClass("active");
    });
});