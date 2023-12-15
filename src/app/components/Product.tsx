import React from 'react';
import Image from 'next/image';

type ProductProps = {
    // 必要に応じてプロパティを追加できます
};

const Product: React.FC<ProductProps> = () => {
    return (
        <div style={ProductStyle}>
            <h2 style={describeStyle}>Welcome to our website!</h2>
        </div>
    );
};

const ProductStyle = {
    backgroundImage: 'url(/images/about.png)', // 画像のURL
    backgroundSize: 'cover', // 画像をカバーとして設定
    backgroundPosition: 'center', // 画像を中央に配置
    height: '400px', // 高さを設定
    // 他に必要なスタイルがあれば追加
};

const describeStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '2rem',
};

export default Product;