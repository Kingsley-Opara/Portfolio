import {Card} from 'react-bootstrap'
import './projects.css';
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const Project = ({projectall}) => {
    return ( 
        <>

            <Card bg='dark' variant='dark' className='py-4 project_card'>
                <img src={projectall.image} alt="" />
                <Card.Body>
                    <Card.Title as='h5'>{projectall.name}</Card.Title>
                </Card.Body>
                <Card.Text as = 'p' className='px-2'>
                    <p>{projectall.discription}</p>
                </Card.Text>
                <Card.Footer as='div'>
                    <div className='projects_icons'>
                        {projectall.live && <BsFillArrowUpRightSquareFill/>}
                        <AiFillGithub/>
                    </div>

                </Card.Footer>
            </Card>
        </>
     );
}
 
export default Project;