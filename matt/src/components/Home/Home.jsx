import React ,{useState , useEffect} from 'react';
import { Row , Col , Container , Dropdown, Button} from 'react-bootstrap'
import Logo from '../../Logo.jsx'
import styles from './Home.module.css'
import AboutMe from '../Experiencia/AboutMe'
import {Link} from 'react-router-dom'
import WorkExperience from '../WorkExperience/WorkExperience.jsx';
import Stack from '../Stack/Stack.jsx';
import Design from '../Design/Design.jsx';
import Footer from '../Footer/Footer.jsx';


export function Home() {

var moveIt = () => {
    if( active == styles.btn1){
        setActive(styles.btn2)
    }else{ setActive(styles.btn1)
    }
}
const [active, setActive] = useState(styles.btn1)
const [hideLogo, setHideLogo] = useState(false)
const [showExperience, setShowExperience] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setHideLogo(true)
        }, 2000);
        });
    return(
        <Container>
            <Row className={styles.row}>
                <div className={hideLogo?  styles.logo : styles.logoFull} >
                    <Logo />
                </div>
                <Col className={hideLogo?  styles.titles : styles.titlesFull} sm={6}>
                    <h2>Full Stack Web Developer</h2>
                    <h2>& Graphic Designer</h2>
                    <hr/>
                </Col>
                <Col className={hideLogo? active : styles.noDisplay} >
                    <Link to='/NO'>
                    <Button variant= "danger" onMouseEnter={()=> moveIt()}  >DONT TOUCH</Button>
                    </Link>
                </Col>
            </Row>
            <div className={styles.container}>
               <AboutMe hideLogo={hideLogo} />
            </div>
            <div>
                <WorkExperience/>
            </div>
            <div>
                <Stack/>
            </div>
            <div>
                <Design/>
            </div>
            <div>
                <Footer/>
            </div>
        </Container>
    )
}

export default Home


// {(()=>{
//     if(false){
//         return(
//             <Col className={styles.titles} sm={6}>
//             <h2>Full Stack Web Developer</h2>
//             <h2>& Graphic Designer</h2>
//         </Col>
//         )
//     }
// })()}