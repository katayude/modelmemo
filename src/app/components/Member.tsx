import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type MemberProps = {
    // 必要に応じてプロパティを追加できます
};

const Member: React.FC<MemberProps> = () => {
    return (
        <section style={sectionStyle}>
            <h2 style={titleStyle}>Member</h2>
            <ul style={listStyle}>
                <li style={itemStyle}>
                    <Image src="/images/yutaka.png" alt="member1" style={imageStyle} width={100} height={100} />
                    <p style={nameStyle}>Yutaka</p>
                </li>
                <li style={itemStyle}>
                    <Image src="/images/ukai.png" alt="member2" style={imageStyle} width={100} height={100} />
                    <p style={nameStyle}>Ukai</p>
                </li>
                <li style={itemStyle}>
                    <Image src="/images/iida.png" alt="member3" style={imageStyle} width={100} height={100} />
                    <p style={nameStyle}>Iida</p>
                </li>
            </ul>
        </section>
    );
};

const sectionStyle = {
    padding: '2rem 0',
    background: '#eee',
};

const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
};

const listStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
};

const itemStyle = {
    display: 'flex',
    //flexDirection: 'column',
    alignItems: 'center' as 'center',
};

const imageStyle = {
    //width: '100px',
    //height: '100px',
    borderRadius: '50%',
};

const nameStyle = {
    marginTop: '0.5rem',
    color: '#333',
};

export default Member;