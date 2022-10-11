import {Card} from 'react-bootstrap'
import './projects.css';
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import { useContext } from 'react';
import Context from '../../context';
import { useState } from 'react';

const Project = ({projectall}) => {
    const {lightMode} = useContext(Context)
    const [showText, setShowText] = useState(false)
    
    // const showTextfunc = () =>{
    //     setSh
    // }

    return ( 
        <>

            <Card bg={lightMode ? "dark": 'white'} variant={lightMode ? "dark": 'white'} className='py-4 project_card mx-2'>
                <img src={projectall.image} alt="" />
                <Card.Body>
                    <Card.Title as='h5'>{projectall.name}</Card.Title>
                </Card.Body>
                <Card.Text as = 'p' className='px-2'>
                    <p>{projectall.discription}</p>
                </Card.Text>
                <Card.Footer as='div'>
                    <div className='projects_icons'>
                        {projectall.live && <a href={projectall.LiveUrl} className='icon' target='_blank'  rel='noopener noreferrer' >
                            <BsFillArrowUpRightSquareFill/>
                        </a>}
                        <a href={projectall.CodeUrl} target = '_blank' className='icon' rel='noopener noreferrer'><AiFillGithub/></a>
                    </div>

                </Card.Footer>
            </Card>
        </>
     );
}
 
export default Project;