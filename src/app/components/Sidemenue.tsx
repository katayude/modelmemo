import React from 'react';

const Sidemenue: React.FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li id="01"></li>
                    <li id="02"><span>aaa</span><span>今いる場所</span></li>
                    <li id="03"><a href="images">画像一覧</a></li>
                    <li id="03"><a href="3dmodels">３Dモデル</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidemenue;
