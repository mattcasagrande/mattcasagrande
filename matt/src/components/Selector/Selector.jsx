import React from 'react'
import styles from './Selector.module.css'
import flecha from '../../Imagenes/flecha-hacia-arriba.png'
import { useState } from 'react'

export function Selector({selectCompany,companies,lastSelected , selectedCompany}){
const [hovered , setHovered]= useState(null)

    return(
        <div className={selectedCompany? styles.container : styles.containerLine}>
            {console.log("componente",companies)}
            
            
            {(()=>{
                    if(!selectedCompany){
                        return <h5 className={styles.etiqueta}>Companies</h5>
                    }
                    if(selectedCompany){
                        return(
                            <div className={styles.close}>
                                <hr/>
                            </div>
                        )
                    }
                })()}
            <div>
                {
                    (companies.map(x =>{
                        return(
                            
                                <div id={x.id == hovered? styles.hovered :
                                    x.id == selectedCompany? styles.containerSelect : "none"} 
                                className={selectedCompany? styles.nameContainer : styles.containerLine}
                                onClick={() => selectCompany(x.id)} 
                                onMouseEnter={()=> setHovered(x.id)}
                                onMouseLeave={()=> setHovered(null)}
                                >
                                    
                                <p className={ selectedCompany? styles.nombres : styles.nombresLine}>{x.name}</p>
                                </div>
                            
                        )
                    }))
                }
                {(()=>{
                    if(selectedCompany){
                        return(
                            <div className={styles.close}>
                                <hr/>
                                <img className={styles.img} onClick={()=>selectCompany(null)} src={flecha} alt=""/>
                            </div>
                        )
                    }
                })()}
            </div>
        </div>
    )
}
export default Selector