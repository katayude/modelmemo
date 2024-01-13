import react, { useState } from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import Image from 'next/image';

type displayImageProps = {
    pinId: string;  // 親コンポーネントから受け取るプロパティの型定義
    imagePath: string;
};

const DisplayImage: React.FC<displayImageProps> = ({ pinId, imagePath }) => {
    return (
        <div>
            {pinId},
            <Image src={`/images/rikei/${imagePath}`} alt="Room Image" width={300} height={300} />
        </div>


    )
}
export default DisplayImage;