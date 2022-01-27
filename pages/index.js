import Donut from "../components/Donut"
import Layout from "../components/Layout"

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
    return (
        <Layout>
            <Donut />
            <header>
                <div>
                    <h1>Luisbert</h1>
                    <p>Software Engineer. github</p>
                </div>
            </header>

            <h2>projects</h2>
            {projects.map(({ category, projects }) => (
                <Category category={category} key={category}>
                    {projects.map(project => (
                        <Project key={project.name} project={project} />
                    ))}
                </Category>
            ))}
        </Layout>
    )
}

const Project = ({ project: { name, description } }) => (
    <p className="project">
        <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
            {name}
        </span>
        : {description}
    </p>
)

const Category = ({ category, children }) => (
    <div style={{ margin: "0 0 3rem 0" }}>
        <h3>{category}</h3>
        {children}
    </div>
)
