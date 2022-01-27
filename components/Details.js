import Image from "next/image"

const Details = () => (
    <div>
        <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
            Hello
        </h3>
        <Image width="425px" height="225px" src="/sorting-visualizer.png" />
        <p style={{ textAlign: "center", width: "100%" }}>
            <a href="">code</a> . <a href="">live</a>
        </p>
        <p>description</p>
    </div>
)

export default Details
