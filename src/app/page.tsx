/*import Image from 'next/image'

export default function Home() {
  return (
    <div>Hello world</div>
  )
}*/


import React from 'react';
import Header from '@/app/components/Header';
import HeroImage from '@/app/components/HeroImage';
import Member from '@/app/components/Member';
import Product from '@/app/components/Product';
import styles from './page.module.css'
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div>
      <div>
        <Header title="MODELMEMO" />
      </div>
      <div className={styles.container}>
        <Link href="/product_home" passHref>
          <div className={styles.heroimage} id="#products">
            <img src="/images/remake_heroimage.png" alt="*" width="70%" />
          </div>
        </Link>
        <div className={styles.about} id="about">
          <p>ABOUT</p>
          <img src="/images/remake_about.png" alt="*" width="70%" />
        </div>
        <div className={styles.members} id="members">
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
