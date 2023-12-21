import React from 'react';
import styles from './Sidemenue.module.css';

const Sidemenue: React.FC = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.inner}>
                    <ul>
                        {/* 現在いるディレクトリを取得する */}
                        <li className={styles.dir}><a href="#">チーム名ー現場名ールーム名</a></li>
                        {/*現在いる場所を取得する*/}
                        <a href="#">
                            <li className={styles.link}>
                                <img src="/images/logo.png" alt="#" width="60px" height="60px" /><span>現在いる場所</span>
                            </li>
                        </a>
                        {/* 写真一覧へのリンクをはる */}
                        <a href="#">
                            <li className={styles.link}>
                                <img src="/images/logo.png" alt="#" width="60px" height="60px" /><span>画像一覧</span>
                            </li>
                        </a>
                        {/* 一覧へのリンクをはる */}
                        <a href="#">
                            <li className={styles.link}>
                                <img src="/images/logo.png" alt="#" width="60px" height="60px" /><span>3Dモデル一覧</span>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="outer">
                    <img src="/images/logo.png" alt="#" width={90} height={90} />
                </div>
            </nav>
        </div>
    );
};

export default Sidemenue;
