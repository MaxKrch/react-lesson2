import { render, screen } from "@testing-library/react";
import ProjectList from "./project-list";

describe(`Component: ProjectList`, () => {
    const projectList = [{
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
    }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
    }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites"
    }]

    it(`should render correctly`, () => {
        render(<ProjectList projects={projectList} />)

        expect(screen.getAllByRole(`listitem`).length).toBe(projectList.length);

        projectList.map((project) => {
            expect(screen.getAllByAltText(project.category)[0]).toBeInTheDocument()
        })
    })
})