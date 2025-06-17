import { type Filter, type Project } from "../../types";

interface PortfolioProps {
  projects: Project[];
}

interface PortfolioState {
  projects: Project[];
  selected: Filter;
}

export {
    type PortfolioProps,
    type PortfolioState
}