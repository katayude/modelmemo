import react, { useState } from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

type displayImageProps = {
    pinId: string;  // 親コンポーネントから受け取るプロパティの型定義
};

const DisplayImage: React.FC<displayImageProps> = ({ pinId }) => {
    return (
        <div>
            {pinId}
        </div>
    )
}
export default DisplayImage;