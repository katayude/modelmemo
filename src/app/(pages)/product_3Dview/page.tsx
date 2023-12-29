import React from 'react';
import Page from '@/app/components/3Dmodel'; // 3Dグラフィックスを表示するコンポーネント
import Sidemenue from '@/app/components/Sidemenue'; // サイドメニューを表示するコンポーネント
import './App.css'; // CSSファイル

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Sidemenue />
            <Page />
        </div>
    );
};

export default App;


