import { useState } from "react"

let A = 1,
    B = 1

const { sin, cos } = Math

function asciiframe() {
    let b = [],
        z = []
    let height = 12,
        width = 26,
        resolution = height * width

    A += 0.07
    //    B += 0.03

    let cA = cos(A),
        sA = sin(A),
        cB = cos(B),
        sB = sin(B)

    let PI = 3.14

    for (let k = 0; k < resolution; k++) {
        b[k] = k % width == width - 1 ? "\n" : " "
        z[k] = 0
    }

    for (let j = 0; j < 2 * PI; j += 0.07) {
        // j <=> theta
        let ct = cos(j),
            st = sin(j)

        for (let i = 0; i < 2 * PI; i += 0.02) {
            // i <=> phi
            let sp = sin(i),
                cp = cos(i),
                h = ct + 2, // R1  R2*cos(theta)
                D = 1 / (sp * h * sA + st * cA + 4.5), // this is 1/z
                t = sp * h * cA - st * sA // this is a clever factoring of some of the terms in x' and y'

            let xPos = 13,
                yPos = 6

            let x = 0 | (xPos + 12 * D * (cp * h * cB - t * sB)),
                y = 0 | (yPos + 6 * D * (cp * h * sB + t * cB)),
                o = x + width * y,
                N =
                    0 |
                    (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB))

            if (y < height && y >= 0 && x >= 0 && x < width - 1 && D > z[o]) {
                z[o] = D
                b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0]
            }
        }
    }
    return b.join("")
}

const Donut = () => {
    const [donut, setDonut] = useState(asciiframe())
    const [animation, setAnimation] = useState(null)

    function play() {
        setAnimation(
            setInterval(() => {
                setDonut(asciiframe())
            }, 70)
        )
    }

    function pause() {
        setAnimation(clearInterval(animation))
    }

    return (
        <pre
            onMouseEnter={play}
            onMouseLeave={pause}
            className="w-min h-min text-xs tracking-widet py-6"
        >
            <a
                href="https://www.a1k0n.net/2011/07/20/donut-math.html"
                target="_blank"
                rel="noreferrer"
            >
                {donut}
            </a>
        </pre>
    )
}

export default Donut
