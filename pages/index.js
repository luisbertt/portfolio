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
            <div>
                <header className="py-10">
                    <h1 className="text-4xl font-bold mb-4">Luisbert</h1>
                    <p>Software Engineer</p>
                    <p>
                        Skills: Javascript, Typescript, Go, React, NextJS, SQL
                    </p>
                    <p>
                        Interest: Learning, Film, Sports, Reading, Snowboarding,
                        Chess
                    </p>
                    <p className="space-x-2">
                        <span>Links:</span>
                        <a
                            href="mailto:luisbrttt@gmail.com"
                            className="text-xl"
                        >
                            📧
                        </a>
                        <a href="https://github.com/luisbertt" target="_blank">
                            <i className="devicon-github-original text-xl" />
                        </a>
                        <a href="https://linkedin.com/in/luisbert">
                            <i className="devicon-linkedin-plain text-xl" />
                        </a>
                    </p>
                </header>
                <div className="flex space-x-4">
                    <div>
                        <h2 className="text-2xl font-bold">projects</h2>
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
            </div>
        </Layout>
    )
}

const Project = ({ project, setActiveProject }) => (
    <p
        className="w-96 px-2 py-1 hover:bg-zinc-900 rounded"
        onMouseEnter={() => setActiveProject(project)}
    >
        <span className="font-bold underline">{project.name}</span>:{" "}
        {project.description}
    </p>
)

const Category = ({ category, children }) => (
    <div className="mb-2">
        <h3 className="py-3 px-2 text-xl font-bold">{category}</h3>
        {children}
    </div>
)
