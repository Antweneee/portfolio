import { Container, Row, Col } from "react-bootstrap";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectCard from "./ProjectCard";

function ProjectInstance({title, languages ,description, imageUrls}) {
    return (
        <Container
            style={{
                marginBottom: "80px",
            }}
        >
            <Row style={{ justifyContent: "center", padding: "5px" }}>
                <h1 style={{ fontSize: "2.1em" }}>
                    {title}
                </h1>
            </Row>
            <Row style={{ alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
                <Col
                    md={7}
                    style={{
                    justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "50px",
                    maxWidth: "600px"
                    }}
                >
                    
                    <ProjectCard
                        languages={languages}
                        description={description}
                    />
                </Col>
                <Col
                    md={5}
                    style={{ 
                    
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", 
                    overflow: "hidden", 
                    paddingTop: "30px", 
                    paddingBottom: "30px",
                    paddingLeft: "30px"
                }}
                    
                    className="about-img circular-image"
                >
                    <ProjectsCarousel images={imageUrls} />
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectInstance;