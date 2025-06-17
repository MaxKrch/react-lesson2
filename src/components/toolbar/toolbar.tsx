import { PureComponent } from "react";
import { type ToolbarProps } from "./toolbar.type";
import ToolbarItem from "./toolbar-item";

class Toolbar extends PureComponent<ToolbarProps> {
    render() {
        return(
            <ul className="portfolio-toolbar__container">
                {
                    this.props.filters.map(filter => (
                        <ToolbarItem 
                            filter={filter}
                            selected={filter === this.props.selected}
                            onSelectFilter={this.props.onSelectFilter}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default Toolbar