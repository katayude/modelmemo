import React from 'react';

const Sidemenue: React.FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li id="01">
                    </li>
                    <li id="02">
                        <span>aaa</span>
                        <span>今いる場所</span>
                    </li>
                    <li id="03">
                        <span><img src="/images/logo.png" alt="*" /></span>
                        <span>あいうえお</span>
                    </li>
                    <li id="03">
                        <span><img src="#" alt="#" /></span>
                        <span></span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidemenue;
