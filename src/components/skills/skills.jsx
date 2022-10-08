import skills from "./skillSet";
import {Container} from 'react-bootstrap'
import './skills.css'
const Skills = () => {
    return ( 
        <>
            <section className="skills-wrapper">
                <h2 className="tools">Tools/Skills</h2>
                <Container>
                    <div className="tools-con">
                        <div className="skills-con">
                            {
                                skills.map((skill)=>{
                                return ( 
                                        <div key={skill.title} className='py-3 skill'>
                                            <span className="title">{skill.title}</span>
                                            <div className="skill-bar">
                                                <div className={`${skill.title} progress`}></div>

                                            </div>

                                        </div>
                                )
                                })
                            }
                        </div>
                        <img  
                        src="https://user-images.githubusercontent.com/105108549/190127191-945c97b4-f2e8-47fe-b1da-ff678d31c0ed.gif" 
                        className="gif-img"
                        />
                    </div>

                </Container>
            </section>
        </>
     );
}
 
export default Skills;
