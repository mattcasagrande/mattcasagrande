import React ,{useState , useEffect} from 'react';
import { Button , Collapse , Row , Col } from 'react-bootstrap';
import styles from './AboutMe.module.css'

export function AboutMe(hideLogo){

const [showAbout , setShowAbout] = useState(false)

    return(
        <div className={styles.container}>
            
                <div id="About-me">
                <Row>
                <Col sm={3} className={styles.imgCont}>
                    <img className={styles.img} src="https://avatars2.githubusercontent.com/u/61607638?s=460&u=e08ab7c82de3b1b6bf70f03c75dea1b494b33161&v=4" alt=""/>
                </Col>
                <Col>
                <h4>About Me</h4>
                    <p>
                    Since my start in 2010, I always had a creative profile, I went through two careers: Industrial Design & Graphic Design and many courses where I perfected my skills with Adobe programs (Illustrator , InDesign, Photoshop, AfterEffects, Dreamweaver) which allowed me to successfully work in any design environment and project.
                    <br/>
                    Looking for new horizons and skills to satisfy my creative desires I studied to become a full-stack developer making me proficient in both frontend (javascript, react, HTML, CSS, bootstrap,vue, redux ,redux-saga ) & backend (node js, SQL, express, Dbeaver, PostgreSQL ) with still much to learn, but willing to take the challenge.
                    </p>
                    <hr/>
                </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutMe