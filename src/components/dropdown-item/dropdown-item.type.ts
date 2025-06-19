import type { menuItems } from "../../const";

type DropdownItemProps = {
    isActive: boolean;
    item: typeof menuItems[number]
    onClick: (item: typeof menuItems[number]) => void
}

export type {
    DropdownItemProps 
}