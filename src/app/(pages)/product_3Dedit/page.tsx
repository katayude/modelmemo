import React from 'react';
import Link from 'next/link';
import Model from '@/app/components/3Dmodel_edit'; // 3Dグラフィックスを表示するコンポーネント
import Topmenue from '@/app/components/Topmenue'; // TOPメニューを表示するコンポーネント
import styles from './page.module.css'

const App: React.FC = () => {
    return (
        <>
            <div className={styles.topmenue}>
                <Topmenue />
            </div>

            <div className={styles.contents}>
                <div className={styles.model}>
                    <span><Model /></span>
                </div>
                {/* 画像を矢印に差し替える */}
                <div className={styles.arrows}>
                    <img className={styles.img} src="/images/return.png" alt="*" />
                    <Link className={styles.link} href={`/product_3Dview`} passHref>
                        <img className={styles.img} src="/images/checkmark.png" alt="*" />
                    </Link>
                </div>
                {/* 画像一覧を表示する */}
                <div className="images">
                </div>

            </div>
        </>
    );
};

export default App;