'use client';

import React, { useState } from 'react';
import companies from './experience.js';
import Preview from '../Preview/Preview.jsx';
import { Row , Col, Container } from 'react-bootstrap';
import Selector from '../Selector/Selector.jsx';
import styles from './WorkExperience.module.css'
function WorkExperience(){
const [selectedCompany , setSelectedCompany] = useState(null)
const visible = () =>{
    if(selectedCompany){
        return 3
    } else { return 12}
}
    return(
        <div className={styles.dofon}>
        <Container className={styles.container}>
            <h3 className={styles.titles} >Experience</h3>
            <Row>
                <Col sm={visible()}> 
                    <Selector
                    companies={companies}
                    selectedCompany={selectedCompany}
                    selectCompany={x => setSelectedCompany(x)}
                    />
                </Col>
                {(()=>{
                    if(selectedCompany){
                        return(
                            <Col>
                            <Preview
                            companies={companies}
                            selectedCompany={selectedCompany}
                            />
                        </Col>
                        )
                    }
                })()}
             
               
            </Row>
        </Container>
        </div>
    )
}

export default WorkExperience