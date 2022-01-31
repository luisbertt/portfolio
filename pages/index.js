import { useState } from "react"
import Layout from "../components/Layout"
import Donut from "../components/Donut"
import Details from "../components/Details"

import cms from "../portfolio.json"

const categories = [...new Set(cms.projects.map(p => p.category))]

function groupProjectsByCategory(projects) {
    return categories.map(category => ({
        category,
        projects: projects.filter(p => p.category == category),
    }))
}

const projects = groupProjectsByCategory(cms.projects)

export default function Home() {
    const [activeProject, setActiveProject] = useState(null)

    return (
        <Layout>
            <Donut />
            <header>
                <div>
                    <h1>Luisbert</h1>
                    <p>Software Engineer. github</p>
                </div>
            </header>
            <div style={{ display: "flex" }}>
                <div>
                    <h2>projects</h2>
                    {projects.map(({ category, projects }) => (
                        <Category category={category} key={category}>
                            {projects.map(project => (
                                <Project
                                    key={project.name}
                                    project={project}
                                    setActiveProject={setActiveProject}
                                />
                            ))}
                        </Category>
                    ))}
                </div>
                {activeProject ? <Details project={activeProject} /> : null}
            </div>
        </Layout>
    )
}

const Project = ({ project, setActiveProject }) => (
    <p className="project" onMouseEnter={() => setActiveProject(project)}>
        <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
            {project.name}
        </span>
        : {project.description}
    </p>
)

const Category = ({ category, children }) => (
    <div style={{ margin: "0 0 2rem 0" }}>
        <h3>{category}</h3>
        {children}
    </div>
)
