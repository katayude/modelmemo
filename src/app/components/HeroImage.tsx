import React from 'react';
import Image from 'next/image';

type HeroImageProps = {
    // 必要に応じてプロパティを追加できます
};

const HeroImage: React.FC<HeroImageProps> = () => {
    return (
        <div style={heroImageStyle}>
            <h2 style={titleStyle}>Welcome to our website!</h2>
        </div>
    );
};


const titleStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '2rem',
};

const heroImageStyle = {
    backgroundImage: 'url(/images/heroimage.png)', // 画像のURL
    backgroundSize: 'cover', // 画像をカバーとして設定
    backgroundPosition: 'center', // 画像を中央に配置
    height: '400px', // 高さを設定
    // 他に必要なスタイルがあれば追加
};

export default HeroImage;
