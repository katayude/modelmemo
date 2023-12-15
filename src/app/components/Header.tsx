import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

type HeaderProps = {
    title: string; // ヘッダーのタイトル
    // 必要に応じて他のプロパティを追加できます
};

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header style={headerStyle}>
            <Image src="/images/logo.png" alt="logo" width="100" height="100" />
            <h1 style={titleStyle}>{title}</h1>
            <nav>
                <ul style={listStyle}>
                    <li style={itemStyle}>
                        <Link href="/">
                            ABOUT
                        </Link>
                    </li>
                    <li style={itemStyle}>
                        <Link href="/">
                            PRODUCTS
                        </Link>
                    </li>
                    <li style={itemStyle}>
                        <Link href="/">
                            MEMBER
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 0',
    background: '#333',
    color: 'white',
    textAlign: 'center' as 'center',
};

const titleStyle = {
    margin: '0',
    fontSize: '1.5rem',
};

const listStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    listStyle: 'none',
    padding: '0',
};

const itemStyle = {
    margin: '0 1rem',
};

export default Header;
