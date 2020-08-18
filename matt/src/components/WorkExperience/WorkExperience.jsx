import React from 'react';
import companies from './experience.js'
import Preview from '../Preview/Preview.jsx';
import { useState } from 'react';
import { Row , Col, Container } from 'react-bootstrap';
import Selector from '../Selector/Selector.jsx';
import styles from './WorkExperience.module.css'
function WorkExperience(){
const [selectedCompany , setSelectedCompany] = useState(null)
const [lastSelectedCompany , setLastSelectedCompany] = useState(null)

const companyPreview = () => {
    if(selectedCompany){
        companies.find(x => x.id === selectedCompany)
    }
}
const visible = () =>{
    if(selectedCompany){
        return 3
    } else { return 12}
}
console.log(lastSelectedCompany)

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
                    lastSelected={x => setLastSelectedCompany(x)}
                    />
                </Col>
                {(()=>{
                    if(selectedCompany){
                        return(
                            <Col>
                            {console.log(companies)}
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