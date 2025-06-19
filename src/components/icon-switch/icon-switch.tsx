import type { FC } from "react";
import type { IconSwitchProps } from "./icon-switch.type";


const IconSwitch: FC<IconSwitchProps> = ({icon, onSwitch}) => {
    return(
        <span
            role="button"
            className="material-icons icon-switch"
            onClick={onSwitch}
        >
            {icon}
        </span>
    )

}

export default IconSwitch;