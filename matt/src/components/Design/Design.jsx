'use client';

import React, { useState } from 'react';
import styles from './Design.module.css';
import { Row } from 'react-bootstrap';
import tools from './tools';
import { publicUrl } from '@/lib/basePath';

export function Design() {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const brushClass = [
        open ? styles.bigbrush : styles.brush,
        !open && hovered ? styles.hovered : null,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={styles.container}>
            <Row className={styles.stack}>
                <img
                    className={brushClass}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => setOpen(!open)}
                    src={publicUrl('/Imagenes/brush.svg')}
                    alt=""
                />

                {(() => {
                    if (open) {
                        return (
                            <h3 className={styles.title}>
                                <a href="https://www.behance.net/designmatt6c88">Behance</a>
                            </h3>
                        );
                    }
                    return <h3 className={styles.title}>Design Tools</h3>;
                })()}
            </Row>
            <Row className={open ? styles.iconCont : styles.iconHide}>
                {tools.map((x) => {
                    if (x.name === 'Boton') {
                        return (
                            <img
                                key="Boton"
                                className={open ? styles.cierre : styles.iconoClosed}
                                src={publicUrl('/Imagenes/espalda.svg')}
                                alt=""
                                onClick={() => setOpen(!open)}
                            />
                        );
                    }
                    return (
                        <div key={x.name}>
                            <img
                                className={open ? styles.icono : styles.iconoClosed}
                                src={x.url}
                                alt=""
                            />
                        </div>
                    );
                })}
            </Row>
        </div>
    );
}

export default Design;
