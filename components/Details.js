import Image from "next/image"

const Details = ({ project }) => (
    <aside className="flex mt-4 space-x-2">
        <div className="w-96">
            <Image
                width="384px"
                height="220px"
                src={`/${project.previewImg}`}
                placeholder="blur"
                blurDataURL={`/${project.previewImg}`}
            />
            <p className="text-center">
                <a className="underline" href={project.codeLink} target="_blank">
                    github
                </a>
                {" · "}
                <a className="underline" href={project.demoLink} target="_blank">
                    demo
                </a>
            </p>
        </div>
        <div>
            <p className="font-bold">Stack:</p>
            <ul>
                {project.stack.map(tech => (
                    <li>{tech}</li>
                ))}
            </ul>
        </div>
    </aside>
)

export default Details
