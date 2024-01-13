import React, { use } from 'react';
import Link from 'next/link';
import Model from '@/app/components/3Dmodel'; // 3Dグラフィックスを表示するコンポーネント
import Topmenue from '@/app/components/Topmenue'; // TOPメニューを表示するコンポーネント
import styles from './page.module.css';

type ThreeDviewProps = {
    params: {
        id: number;
    };
};

const App: React.FC<ThreeDviewProps> = ({ params }) => {
    return (
        <div className={styles.all}>
            <div className={styles.topmenue}>
                <Topmenue />
            </div>
            <div className={styles.contents}>
                <div className={styles.model}>
                    <span><Model roomid={Number(params.id)} /></span>
                </div>
                {/* 画像を矢印に差し替える */}
                <div className={styles.arrows}>
                    <img className={styles.img} src="/images/return.png" alt="*" />
                    <Link className={styles.link} href={`/product_3Dedit/${Number(params.id)}`} passHref>
                        <img className={styles.img} src="/images/edit.png" alt="*" />
                    </Link>
                </div>
                {/* 画像一覧を表示する */}
                <div className="images">
                </div>

            </div>
        </div>
    );
};

export default App;


