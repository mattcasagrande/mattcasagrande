'use client';

import React, { useState } from 'react';
import styles from './Stack.module.css';
import stacks from './stacks.js';
import { Row, Col } from 'react-bootstrap';
import { publicUrl } from '@/lib/basePath';

export function Stack() {
const[open , setOpen] = useState(false)
const [selectedStack , setSelectedStack] = useState(null)
const handleClick = () => {
    setOpen(!open)
    setSelectedStack(null)
}
    return(
        <div className={styles.container}>
            <div className={styles.stack}>
                {(()=>{
                    if(open){
                        return(
                            <h3 className={styles.link} ><a href="https://github.com/mattcasagrande">GitHub</a></h3>
                        )
                    } else {
                        return(
                        <h3>Stack</h3>)
                    }
                })()}
            </div>
            <div className={open? styles.tiraOpen : styles.tira}>
                   <img className={styles.flecha}
                   src={open ? publicUrl('/Imagenes/espalda-der.svg') : publicUrl('/Imagenes/espalda.svg')} alt=""
                   onClick={()=>{handleClick()}}
                   />
            </div>
            <Row className={open? styles.iconCont : styles.iconHide}>
              
                {(()=>{
                    return(
                        stacks.map(x => {
                            return(
                                <Col
                                  key={x.name}
                                  className={styles.iconos}
                                  onClick={() => setSelectedStack(x.name)}
                                >
                                    <img className={styles.icono} src={x.logo} alt="" />
                                </Col>
                            )
                        })
                    )
                })()}
            </Row>
            {(()=>{
                if(selectedStack){
                    return(
                        <Row className={styles.stackName}>
                            <h3>{selectedStack}</h3>
                        </Row>
                    )
                }
            })()}
        </div>
    )
}

export default Stack