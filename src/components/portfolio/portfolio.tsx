import { Component} from "react";
import type { PortfolioProps, PortfolioState } from "./portfolio.type";
import ProjectList from "../projectList";
import Toolbar from '../toolbar';
import { filters } from '../../const';

class Portfolio extends Component<PortfolioProps, PortfolioState> {
  constructor(props: PortfolioProps) {
    super(props);

    this.state = {
      projects: props.projects,
      selected: `All`,
    };
  }

  render() {
    const filtredProjects = this.state.selected === `All`
      ? this.state.projects
      : this.state.projects.filter(item => item.category === this.state.selected)

    return (
      <div className='portfolio-container'>
        <Toolbar 
          filters={filters}
          selected={this.state.selected}
          onSelectFilter={(filter) => this.setState({ selected: filter })} 
        />
        <ProjectList projects={filtredProjects} />
      </div>
    )
  }
}

export default Portfolio