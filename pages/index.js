import { useState } from "react"
import Layout from "../components/Layout"
import Donut from "../components/Donut"
import Details from "../components/Details"

import cms from "../portfolio.json"
import { groupProjectsByCategory } from "../utils"

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
                    <p>Skills: Javascript, Typescript, Go, React, NextJS, SQL</p>
                    <p>Interest: Learning, Film, Sports, Reading, Snowboarding, Chess</p>
                    <p className="space-x-2">
                        <span>Links:</span>
                        <Link isEmail href={cms.links.email}>
                            Email
                        </Link>
                        <Link href={cms.links.github}>GitHub</Link>
                        <Link href={cms.links.linkedin}>LinkedIn</Link>
                    </p>
                </header>
                <main className="flex space-x-4">
                    <div>
                        <h2 className="text-2xl font-bold">Projects</h2>
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
                </main>
            </div>
        </Layout>
    )
}

const Link = ({ isEmail, href, children }) => (
    <a className="underline" href={isEmail ? `mailto:${href}` : href} target="_blank">
        {children}
    </a>
)

const Project = ({ project, setActiveProject }) => (
    <p
        className="w-96 px-2 py-1 hover:bg-zinc-900 rounded cursor-pointer"
        onMouseEnter={() => setActiveProject(project)}
    >
        <span className="font-bold underline">{project.name}</span>: {project.description}
    </p>
)

const Category = ({ category, children }) => (
    <div className="mb-2">
        <h3 className="py-3 px-2 text-xl font-bold">{category}</h3>
        {children}
    </div>
)
