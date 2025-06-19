import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event"; 
import Dropdown from "./dropdown";
import { menuItems } from "../../const";


describe("Component: Dropdown", () => {
  it("should renders correctly", () => {
    render(<Dropdown items={menuItems} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument()
  });

  it("should toggles dropdown list on button click", async () => {
    render(<Dropdown items={menuItems} />);

    const button = screen.getByRole("button");
    const dropdownWrapper = screen.getByRole("button").closest(".dropdown-wrapper")!;

    expect(dropdownWrapper.classList.contains("open")).toBe(false);
    
    await userEvent.click(button);
    expect(dropdownWrapper.classList.contains("open")).toBe(true);

    await userEvent.click(button);
    expect(dropdownWrapper.classList.contains("open")).toBe(false);
  });
});