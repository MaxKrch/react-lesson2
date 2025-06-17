import { PureComponent } from "react";
import type { ProjectListProps } from "./project-list.type";
import ProjectItem from "./components/project-item";

class ProjectList extends PureComponent<ProjectListProps> {
    render() {
        return (
            <ul className="portfolio-project-list__container">
                {
                    this.props.projects.map((project, index) => <ProjectItem
                        key={`${project.img}${index}`}
                        {...project} 
                    />)
                }
            </ul>
        )
    }
}

export default ProjectList;