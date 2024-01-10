import styles from '/display_images.module.css';
import React from 'react';

// ユーザーの型定義
type User = {
    id: number;
    name: string;
    email: string;
};

// getServerSidePropsの戻り値の型
type ServerSideProps = {
    props: {
        data: User[];
    };
};


export async function getServerSideProps() {
    // ここでAPIからデータを取得する
    // 以下は仮のデータ
    const data = [
        {
            "id": 1,
            "name": "Alice",
            "email": "alice@example.com"
        },
        {
            "id": 2,
            "name": "Bob",
            "email": "bob@example.com"
        }
    ];
    return { props: { data } };
}

// ページコンポーネントのPropsの型
type HomePageProps = {
    data: User[];
};
//表示してみる

const HomePage: React.FC<HomePageProps> = ({ data }) => {
    return (
        <div>
            {data.map(user => (
                <p key={user.id}>{user.name} - {user.email}</p>
            ))}
        </div>
    );
};

export default HomePage;