import cms from "../portfolio.json"
import Donut from "../components/Donut"

import Image from "next/image"
import sunImage from "../assets/sun.png"
import moonImage from "../assets/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../utils/ThemeContext"

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (
        <header>
            <div className="flex items-center space-x-4">
                <div>
                    <button onClick={() => setDarkMode(mode => !mode)}>
                        <Image width={30} height={30} src={darkMode ? sunImage : moonImage} />
                    </button>
                    <h1 className="text-4xl font-bold">{cms.name}</h1>
                    <p className="text-2xl my-1">Software Engineer</p>
                    <Links links={cms.links} />
                </div>
                <Donut />
            </div>
        </header>
    )
}

// <Skills skills={cms.skills} />

const Skills = ({ skills }) => (
    <ul className="text-sm">
        {skills.map(skill => (
            <li>{skill}</li>
        ))}
    </ul>
)

const Links = ({ links }) => (
    <p className="space-x-2">
        {Object.keys(links).map(link => (
            <Link isEmail={links[link].includes("@")} href={links[link]}>
                {link}
            </Link>
        ))}
    </p>
)

const Link = ({ isEmail, href, children }) => (
    <a className="underline" href={isEmail ? `mailto:${href}` : href} target="_blank">
        {children}
    </a>
)

export default Header
