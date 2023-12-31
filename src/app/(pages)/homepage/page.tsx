import React from 'react';
import Header from '@/app/components/Header';
import HeroImage from '@/app/components/HeroImage';
import Member from '@/app/components/Member';
import Product from '@/app/components/Product';
import styles from './page.module.css'

const Page: React.FC = () => {
    return (
        <div>
            <div>
                <Header title="this is header" />
            </div>
            <div className={styles.container}>
                <div className={styles.heroimage}>
                    <img src="/images/heroimage.png" alt="*" width="70%" />
                </div>
                <div className={styles.about}>
                    <p>ABOUT</p>
                    <img src="/images/about.png" alt="*" width="70%" />
                </div>
                <div className={styles.members}>
                    <p>MEMBERS</p>
                    <div className={styles.membersBox}>
                        <div className={styles.member}>
                            <p>山口　豊</p>
                            <img src="/images/yutaka.png" alt="*" width="100%" />
                        </div>
                        <div className={styles.member}>
                            <p>鵜飼　達哉</p>
                            <img src="/images/ukai.png" alt="*" width="100%" />
                        </div>
                        <div className={styles.member}>
                            <p>飯田　亮吾</p>
                            <img src="/images/iida.png" alt="*" width="100%" />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Page;
