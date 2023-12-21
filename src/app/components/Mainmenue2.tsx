import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Roomlist from '@/app/components/Roomlist';

const Mainmenue2: React.FC = () => {
    return (
        <div>

            <div style={roomListStyle}>
                <Roomlist
                    Construction_Phase='配線'
                    Created_Date='12/5'
                    personInCharge='山口'
                    Model='あとで'
                />
            </div>

            <div style={roomListStyle}>
                <Roomlist
                    Construction_Phase='配線'
                    Created_Date='12/5'
                    personInCharge='山口'
                    Model='あとで'
                />
            </div>

            <div style={aiconstyle}>
                <Image src="/images/plus.png" alt="logo" width={100} height={100} />

                <a href="javascript:history.back();">
                    <Image src="/images/return.png" alt="logo" width="100" height="100" />
                </a>
            </div>

        </div>
    );
};

const aiconstyle = {
    display: 'flex',
    justifyContent: 'space-between'
}
const roomListStyle = {
    margin: '1rem',
}
export default Mainmenue2;

