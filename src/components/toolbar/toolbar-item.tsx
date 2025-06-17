import { PureComponent } from "react"
import type { ToolbarItemProps } from "./toolbar.type"
import cn from "classnames"

class ToolbarItem extends PureComponent<ToolbarItemProps> {
    render() {
        return(
            <li
                className={cn({
                    'portfolio-toolbar__item': true,
                    'portfolio-toolbar__item_active': this.props.selected
                })}
                onClick={() => this.props.onSelectFilter(this.props.filter)}
            >
                {
                    this.props.filter
                }
            </li>
        )
    }
}

export default ToolbarItem