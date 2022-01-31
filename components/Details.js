import Image from "next/image"

const Details = ({ project }) => (
    <aside>
        <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
            {project.name}
        </h3>
        <Image width="350px" height="200px" src={`/${project.previewImg}`} />
        <p style={{ textAlign: "center", width: "100%" }}>
            {project.codeLink ? <a href={project.codeLink}>code . </a> : null}
            <a href={project.demoLink}>demo</a>
        </p>
        <p style={{ textAlign: "center" }}>{project.description}</p>
    </aside>
)

export default Details
