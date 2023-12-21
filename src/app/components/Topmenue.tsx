import React from 'react';
import styles from './Topmenue.module.css';

const Topmenue: React.FC = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <span>
                    チーム名ー現場名ールーム名ー施工段階
                </span>
            </nav>
        </div>
    );
};

export default Topmenue;