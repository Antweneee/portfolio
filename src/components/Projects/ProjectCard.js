import { Card } from "react-bootstrap";


function ProjectCard({ languages, description }) {
    return (
        <Card 
            className="project-card-view"
        >
            <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                    <span className="purple"> {languages} </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                    {description[0]}
                    <br />  {description[1]}
                </p>
            </blockquote>
        </Card>
    )
}

export default ProjectCard;