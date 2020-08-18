import React from 'react'
import styles from './NO.module.css'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export function NO() {
    return(
        <div>
            <div className={styles.container}>
                <img className={styles.meme} src="https://i.imgflip.com/2126v1.jpg" alt=""/>    
            </div>
            <div className={styles.why}>
                <h1>Why?</h1>
            </div>
            <Link to='/' className={styles.why}>
                <Button variant= "secondary">Go Back</Button>
            </Link>
        </div>    
    )
}

export default NO