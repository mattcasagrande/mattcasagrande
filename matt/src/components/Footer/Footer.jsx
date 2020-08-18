import React from 'react'
import Logo from '../../Logo.jsx'
import styles from './Footer.module.css'
import { Row, Col } from 'react-bootstrap'

export function Footer(){
    return(
        <div className={styles.container}>
            <Row>
                <Col sm={3} className={styles.imgCol} >
                    <div className={styles.imgCont}>
                        <Logo className={styles.svg} />
                    </div>
                </Col>
                <Col className={styles.links}>
                    
                    <a href="https://github.com/mattcasagrande">
                        <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/640px-GitHub_logo_2013.svg.png" alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/matias-casagrande-0167623b/">
                        <img className={styles.imgLdin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt=""/>
                    </a>
                    <a href="https://www.behance.net/designmatt6c88">
                        <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1024px-Behance_logo.svg.png" alt=""/>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default Footer