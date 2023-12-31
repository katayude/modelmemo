import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Genbalist from '@/app/components/Genbalist';

const Mainmenue: React.FC = () => {
    return (
        <div>
            <div style={GenbaListStyle}>

                <Genbalist
                    building='理系図書館'
                    location='2F'
                    personInCharge='飯田' />
            </div>
            <div style={GenbaListStyle}>

                <Genbalist
                    building='理系図書館'
                    location='1F'
                    personInCharge='山口' />
            </div>
            <div style={GenbaListStyle}>
                <Genbalist
                    building='理系図書館'
                    location='3F'
                    personInCharge='鵜飼' />
            </div>

            <div style={aiconstyle}>
                <Image src="/images/plus.png" alt="logo" width={100} height={100} />

                <a href="javascript:history.back();">
                    <Image src="/images/return.png" alt="logo" width="100" height="100" />
                </a>
            </div>

        </div >
    );
};

const aiconstyle = {
    display: 'flex',
    justifyContent: 'space-between'
}
const GenbaListStyle = {
    margin: '1rem',

}
export default Mainmenue;

