import { Container, Row, Col, Card} from "react-bootstrap";
import Particle from "../Particle";
import { useTranslation } from 'react-i18next';
import ProjectInstance from "./ProjectInstance";

function Projects() {
    const { t, i18n } = useTranslation(); 
    const LivnaOne = require("../../assets/livnaOne.jpg");
    const LivnaTwo = require("../../assets/livnaTwo.jpg");
    const LivnaThree = require("../../assets/livnaThree.jpg");

    const AreaOne = require("../../assets/AreaOne.png")
    const AreaTwo = require("../../assets/AreaTwo.png")
    const AreaThree = require("../../assets/AreaThree.png")

    const EpitechLogo = require("../../assets/epitech-logo.png")

    const imageUrlLivna = [LivnaOne, LivnaTwo, LivnaThree];
    const imageUrlArea = [AreaOne, AreaTwo, AreaThree];

    const LivnaDescOne = t("projects-livna-description1")
    const LivnaDescTwo = t("projects-livna-description2")

    const AreaDescOne = t("projects-area-description1")
    const AreaDescTwo = t("projects-area-description2")

    return (
        <Container fluid className="projects-section">
            <Particle />

            <Container
                style={{
                    marginBottom: "80px",
                }}
            >
                <Row style={{ justifyContent: "center", padding: "5px" }}>
                    <h1 style={{ fontSize: "2.1em" }}>
                        EPITECH
                    </h1>
                </Row>
                <Row style={{ alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                        // display: ""
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px",
                        }}
                    >
                        <Card 
                            className="project-card-view"
                        >
                            <blockquote className="blockquote mb-0">
                                <p style={{ textAlign: "justify" }}>
                                    {t("projects-epitech-description1")}
                                    <a href="https://github.com/Antweneee/Epitech">{t("projects-epitech-description2")}</a>
                                </p>
                            </blockquote>
                        </Card>
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
                        <img 
                            src={ EpitechLogo }
                            style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain", alignItems: "center" }}
                        />
                    </Col>

                </Row>
            </Container>

            <ProjectInstance
                title={"LIVNA"}
                languages={"JS, SQL, NestJS, REACT JS, HTML, CSS, DOM"}
                description={[
                    LivnaDescOne,
                    LivnaDescTwo,
                    " "
                ]}
                imageUrls={imageUrlLivna}
            />

            <ProjectInstance
                title={"AREA"}
                languages={"JS, PYTHON, GOLANG, POSTGRESQL, NODEJS, NESTJS, REACT JS, FLUTTER, DART, DOCKER, GITHUB ACTION"}
                description={[
                    AreaDescOne,
                    AreaDescTwo
                ]}
                imageUrls={imageUrlArea}
            />
        </Container>
    );
}

export default Projects;