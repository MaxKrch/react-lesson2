import { useState } from "react";
import { menuItems } from "../../const";
import type { DropdownListProps } from "./dropdown-list.type";
import DropdownItem from "../dropdown-item";

const DropdownList = ({items, onClick}: DropdownListProps) => {
    const [activeItem, setActiveItem] = useState<typeof menuItems[number] | null>(null)
    
    const handleClick = (item: typeof menuItems[number]) => {
        onClick()
        if(activeItem !== item) setActiveItem(item)
    }
    
    return(
        <ul className="dropdown">
            {
                items.map(item => (
                    <DropdownItem
                        key={item}
                        item={item}
                        isActive={item === activeItem}
                        onClick={handleClick}
                    />
                ))
            }
        </ul>
    )
}

export default DropdownList;