import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropdownItem from "./dropdown-item";
import { vi } from "vitest";
import { menuItems } from "../../const";

describe("Components: DropdownItem", () => {
    const onClickMock = vi.fn();

    beforeEach(() => {
        onClickMock.mockClear()
    })

    it("should render correctly", () => {
        const item = menuItems[0]

        render(
            <DropdownItem 
                item={item}
                isActive={true}
                onClick={onClickMock}
            />
        );

        expect(screen.getByText(item)).toBeInTheDocument();
    });

    it("should calls onClick with item when clicked", async () => {
        const item = menuItems[1]

        render(
            <DropdownItem
                item={item}
                isActive={false}
                onClick={onClickMock}
            />
        );

        const itemLi = screen.getByText(item).closest("li")!

        await userEvent.click(itemLi)
        expect(onClickMock).toHaveBeenCalledWith(item)
    });

    test("adds 'active' class when isActive is true", () => {
        const item = menuItems[0]
        render(
            <DropdownItem
                item={item}
                isActive={true}
                onClick={onClickMock}
            />
        );
        
        const itemLi = screen.getByText(item).closest("li")!;
        expect(itemLi).toHaveClass("active");
    });

    test("does not have 'active' class when isActive is false", () => {
        const item = menuItems[0]
        render(
            <DropdownItem
                item={item}
                isActive={false}
                onClick={onClickMock}
            />);
        
        const itemLi = screen.getByText(item).closest("li")!;
        expect(itemLi).not.toHaveClass("active");
    });
});