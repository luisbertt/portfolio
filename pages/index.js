import { useState, useContext } from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Details from "../components/Details"

import cms from "../portfolio.json"
import { groupProjectsByCategory } from "../utils"
import { ThemeContext } from "../utils/ThemeContext"

export default function Home() {
    return (
        <Layout>
            <Header />
            <Tabs />
        </Layout>
    )
}

const Tabs = () => {
    const groupedProjects = groupProjectsByCategory(cms.projects)
    const [activeProject, setActiveProject] = useState(null)

    const cateogries = groupedProjects.map(group => group.category)

    const [currentIndex, setCurrentIndex] = useState(0)
    const { projects } = groupedProjects[currentIndex]

    return (
        <div>
            <main classname="flex justify-center">
                <ul className="flex space-x-4 text-xl p-2">
                    {cateogries.map((category, i) => (
                        <li className={i !== currentIndex ? "text-zinc-600" : ""}>
                            <button
                                className="font-bold"
                                onClick={() => {
                                    setCurrentIndex(i)
                                    setActiveProject(null)
                                }}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>

                {projects.map(project => (
                    <Project
                        key={project.name}
                        project={project}
                        setActiveProject={setActiveProject}
                    />
                ))}
            </main>
            <aside>{activeProject ? <Details project={activeProject} /> : null}</aside>
        </div>
    )
}

const Project = ({ project, setActiveProject }) => {
    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={darkMode ? "hover:bg-zinc-900 rounded" : "hover:bg-gray-100 rounded"}>
            <p
                className="w-96 px-2 py-1 cursor-pointer"
                onMouseEnter={() => setActiveProject(project)}
            >
                <span className="font-bold">{project.name}</span>: {project.description}
            </p>
        </div>
    )
}
