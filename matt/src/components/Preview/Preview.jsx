import React from 'react'
import { Row, Col, NavLink } from 'react-bootstrap'
import styles from './Preview.module.css'


export function Preview({companies , selectedCompany}){
    const company = companies.find(x => x.id == selectedCompany)
    console.log(companies)
    console.log(company)
    if(!company){
        return(
            <h2>Select Company</h2>
        )
    }else{
    return(
        <div className={styles.container}>
            <Row className={styles.logocont}>
                <Col>
                    <img className={styles.img} src={company.logo} alt=""/>
                </Col>
            </Row>
            <Row className={styles.cabecera}>
                <Col>
                    <h5>{company.name}</h5>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>{company.puesto}</h4>
                </Col>
                
            </Row>
            <Row>
                <Col className={styles.dates}>
                    <h7>{company.type}  -  From: {company.start }   To: {company.end}   in: {company.country}</h7>
                </Col>  
            </Row>
            <Row>
                <Col>
                    <hr/>
                    <h6 className={styles.dates}>What I did:</h6>
                    <p>{company.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <NavLink href={company.url}>{company.url}</NavLink>
                </Col>
            </Row>
           
            
        </div>
    )}
}

export default Preview