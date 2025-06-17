import { PureComponent } from "react"
import type { ProjectItemProps } from "./project-item.type"

class ProjectItem extends PureComponent<ProjectItemProps> {
    render() {
        return (
            <li className="portfolio-project-item__container">
                <img 
                    className="portfolio-project-item__img"
                    src={this.props.img} 
                    alt = {this.props.category}
                />
            </li>
        )
    }
}

export default ProjectItem