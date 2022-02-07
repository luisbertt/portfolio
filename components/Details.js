import Image from "next/image"

const Details = ({ project }) => (
    <aside className="w-96 h-min p-4 border border-zinc-900 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2 underline">{project.name}</h3>
        <Image width="350px" height="200px" src={`/${project.previewImg}`} />
        <p>
            {project.codeLink ? <a href={project.codeLink}>code . </a> : null}
            {project.demoLink ? <a href={project.demoLink}>demo</a> : null}
        </p>
        <p>{project.description}</p>
    </aside>
)

export default Details
