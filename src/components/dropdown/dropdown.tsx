import { useState } from "react";
import DropdownButton from "./dropdown-button";
import classNames from "classnames";
import DropdownList from "../dropdown-list";
import type { DropdownProps } from "./dropdown.type";

const Dropdown = ({items}: DropdownProps) => {
    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const toggleActiveDropdown = () => {
        setIsActiveDropdown(!isActiveDropdown)
    }

    return(
        <div className="dropdown-container">
            <div className="dropdown-body">
                <div className={classNames(
                    "dropdown-wrapper",
                    {"open": isActiveDropdown}
                )}>
                    <DropdownButton onClick={toggleActiveDropdown}/>
                    <DropdownList onClick={toggleActiveDropdown} items={items}/>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;