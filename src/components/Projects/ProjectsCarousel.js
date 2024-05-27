import Carousel from 'react-bootstrap/Carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons from react-icons library
import React from 'react'

function ProjectsCarousel({ images }) {

    return (
        <Carousel 
            className='projects-carousel'
            prevIcon={<FaChevronLeft style={{ color: 'red' }} />} // Change color as needed
            nextIcon={<FaChevronRight style={{ color: 'blue' }} />} // Change color as needed
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
            }}
        >
            <Carousel.Item interval={1000}>
                <img
                    src={ images[0] }
                    style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain", alignItems: "center" }}
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img 
                    src={ images[1] }
                    style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain", alignItems: "center" }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    src={ images[2] }
                    style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain", alignItems: "center" }}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ProjectsCarousel;
