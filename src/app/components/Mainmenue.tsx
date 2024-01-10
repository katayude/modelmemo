"use client"
import Link from 'next/link';
import Image from 'next/image';
import Genbalist from '@/app/components/Genbalist';
import React, { useEffect, useState } from 'react';

type Sitetable = {
    building: string;
    location: string;
    coordinator: string;
    manager: string;
    id: number;
};

const Mainmenue: React.FC = () => {

    const [Sitetable, setSitetable] = useState<Sitetable[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/getsitetable');
            const data = await response.json();
            if (data && data.result && Array.isArray(data.result.rows)) {
                setSitetable(data.result.rows);
            }
        }

        fetchData();
    }, []);

    return (
        <div>

            {Sitetable.map((site, index) => (
                <div style={GenbaListStyle}>
                    <Genbalist
                        //building={site.Building}
                        building={site.building}
                        location={site.location}
                        personInCharge={site.manager}
                    />
                </div>
            ))}

            <div style={GenbaListStyle}>

                <Genbalist
                    building='理系図書館'
                    location='2F'
                    personInCharge='飯田' />
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

