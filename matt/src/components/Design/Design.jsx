import React , {useState} from 'react'
import styles from './Design.module.css'
import { Row, Col } from 'react-bootstrap'
import tools from './tools'
import brush from '../../Imagenes/brush.svg'
import flechader from '../../Imagenes/espalda.svg'

export function Design() {
    const[open , setOpen] = useState(false)
    const[hovered , setHovered] = useState(false)
    return(
        <div className={styles.container}>
            <Row className={styles.stack}>
                <img id={!open && hovered? styles.hovered : "none"}
                className={open? styles.bigbrush : styles.brush}
                onMouseEnter={()=> setHovered(true)}
                onMouseLeave={()=> setHovered(false)}
                onClick={()=> setOpen(!open)}
                src={brush} alt=""
                />
                
            {(()=>{
                    if(open){
                        return(
                            <h3  className={styles.title} ><a href="https://www.behance.net/designmatt6c88">Behance</a></h3>
                        )
                    } else {
                        return(
                            <h3 className={styles.title} >Design Tools</h3>)
                    }
                })()}
            </Row>
                <Row className={open? styles.iconCont : styles.iconHide}>
                    {(()=>{
                        return(
                            tools.map(x => {
                                if(x.name === "Boton"){
                                    return(
                                        <img className={open? styles.cierre : styles.iconoClosed} src={flechader} alt="" onClick={()=> setOpen(!open)}/>
                                    )
                                }else{
                                return(
                                    <div>
                                        <img className={open? styles.icono : styles.iconoClosed}
                                        src={x.url} alt=""/>
                                    </div>
                                )}
                            })
                        )
                    })()}
                </Row>
               
        </div>
    )
}

export default Design