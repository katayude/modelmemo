import React from 'react';
import Model from '@/app/components/3Dmodel'; // 3Dグラフィックスを表示するコンポーネント
import Topmenue from '@/app/components/Topmenue'; // TOPメニューを表示するコンポーネント
import styles from './page.module.css'

const App: React.FC = () => {
    return (
        <>
            <div className={styles.topmenue}>
                <Topmenue />
            </div>

            <div className={styles.model}>
                <Model />
            </div>
        </>
    );
};

export default App;


