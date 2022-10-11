import Hero from "../hero/hero";
import Skills from "../skills/skills";
import {Row, Col, Container} from 'react-bootstrap';
import Project from "../projects/projects";
import projects from "../projects/projectsData";
import './home.css'
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <>
            
            <Hero/>
            <Skills/>
            <section className="projects-section py-3" id='projects'>
                <h2 className="projects_title">
                    <Typewriter
                    onInit={(typewriter) =>{
                        typewriter
                        .typeString('Portfolio')
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString('Projects')
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString('Portfolio')
                        .start()
                    }}
                    />
                </h2>
                <Container>
                    <Row className="py-1">
                        {projects.map((project) =>{
                            return(
                                <Col key={project?.name} sm={12} md={6} lg={4} xlg={3} className='py-2'>
                                    <Project projectall={project}/>
                                </Col>
                            )
                        })}
                    
                    </Row>
                </Container>

            </section>
        </>
      );
}
 
export default Home;