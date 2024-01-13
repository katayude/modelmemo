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
    imagepath: string;
};

const Mainmenue: React.FC = () => {

    const [Sitetable, setSitetable] = useState<Sitetable[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/getsitetable', {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            });
            const data = await response.json();
            if (data && data.result && Array.isArray(data.result.rows)) {
                setSitetable(data.result.rows);
            }
        }

        fetchData();
    }, []);

    return (
        <div>

            {Sitetable.map((site) => (
                <Link key={site.id} href={`/product_room/${site.id}`} passHref>
                    <div style={GenbaListStyle}>
                        <Genbalist
                            building={site.building}
                            location={site.location}
                            personInCharge={site.manager}
                            imagepath={site.imagepath}
                        />
                    </div>

                </Link>
            ))}

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

