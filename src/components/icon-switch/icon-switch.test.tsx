import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event"; 
import IconSwitch from "./icon-switch";
import { vi } from "vitest";

describe("Component: IconSwitch", () => {
    const onSwitch = vi.fn();

    beforeEach(() => {
        onSwitch.mockClear();
    })

    test("should renders correctly", () => {
        render(
            <IconSwitch 
                icon="view_list" 
                onSwitch={onSwitch} 
            />
        );

        expect(screen.getByRole("button")).toHaveTextContent("view_list");
    });

      test("should handles click", async () => {
        render(
            <IconSwitch 
                icon="view_list" 
                onSwitch={onSwitch} 
            />
        );

        const button = screen.getByRole("button");
        await userEvent.click(button);
  
        expect(onSwitch).toHaveBeenCalledTimes(1);
    });
});