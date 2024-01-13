import styles from './displayImage.module.css';
import Image from 'next/image';

type displayImageProps = {
    pinId: string;  // 親コンポーネントから受け取るプロパティの型定義
    imagePath: string;
};

const DisplayImage: React.FC<displayImageProps> = ({ pinId, imagePath }) => {
    return (
        <div className={styles.container}>
            <span>選択したピンの写真</span>
            <Image src={`/images/rikei/${imagePath}`} alt="Room Image" width={300} height={300} />
        </div>


    )
}
export default DisplayImage;