import { menuItems } from "../../const"

type DropdownButtonProps = {
    onClick: () => void
}

type DropdownProps = {
    items: typeof menuItems
}

export type {
    DropdownButtonProps,
    DropdownProps
}