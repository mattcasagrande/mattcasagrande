'use client';

import React, { useState } from 'react';
import styles from './Selector.module.css';
import { publicUrl } from '@/lib/basePath';

export function Selector({ selectCompany, companies, selectedCompany }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div className={selectedCompany ? styles.container : styles.containerLine}>
            {(() => {
                if (!selectedCompany) {
                    return <h5 className={styles.etiqueta}>Companies</h5>;
                }
                if (selectedCompany) {
                    return (
                        <div className={styles.close}>
                            <hr />
                        </div>
                    );
                }
            })()}
            <div>
                {companies.map((x) => {
                    const rowClass = [
                        selectedCompany ? styles.nameContainer : styles.containerLine,
                        x.id === hovered ? styles.hovered : null,
                        x.id === selectedCompany ? styles.containerSelect : null,
                    ]
                        .filter(Boolean)
                        .join(' ');
                    return (
                        <div
                            key={x.id}
                            className={rowClass}
                            onClick={() => selectCompany(x.id)}
                            onMouseEnter={() => setHovered(x.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <p className={selectedCompany ? styles.nombres : styles.nombresLine}>{x.name}</p>
                        </div>
                    );
                })}
                {(() => {
                    if (selectedCompany) {
                        return (
                            <div className={styles.close}>
                                <hr />
                                <img
                                    className={styles.img}
                                    style={{ transform: 'rotate(180deg)' }}
                                    onClick={() => selectCompany(null)}
                                    src={publicUrl('/Imagenes/espalda.svg')}
                                    alt=""
                                />
                            </div>
                        );
                    }
                })()}
            </div>
        </div>
    );
}
export default Selector;
