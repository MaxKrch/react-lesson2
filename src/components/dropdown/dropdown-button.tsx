import type { DropdownButtonProps } from "./dropdown.type"

const DropdownButton = ({onClick}: DropdownButtonProps) => {
    return(
        <button 
            data-testid="toggle" 
            className="btn" 
            onClick={onClick}
        >
            <span>
                Account Settings
            </span>
            <i className="material-icons">
                public
            </i>
      </button>
    )
}

export default DropdownButton