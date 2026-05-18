'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import styles from './NO.module.css';
export function NO() {
    return(
        <div>
            <div className={styles.container}>
                <img className={styles.meme} src="https://i.imgflip.com/2126v1.jpg" alt=""/>    
            </div>
            <div className={styles.why}>
                <h1>Why?</h1>
            </div>
            <div className={styles.why}>
                <Button as={Link} href="/" variant="secondary">
                    Go Back
                </Button>
            </div>
        </div>    
    )
}

export default NO