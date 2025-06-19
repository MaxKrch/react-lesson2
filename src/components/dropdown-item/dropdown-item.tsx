import classNames from "classnames";
import type { DropdownItemProps } from "./dropdown-item.type";

const DropdownItem = (props: DropdownItemProps) => {
    const { item, isActive, onClick } = props
    return(
        <li 
            className={classNames(
                {"active": isActive}
            )}
            onClick={() => onClick(item)}
        >
            <a href="#">
                {item}
            </a>
        </li>
        
    )
}

export default DropdownItem;

