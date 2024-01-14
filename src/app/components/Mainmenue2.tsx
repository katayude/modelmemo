"use client";

import Link from 'next/link';
import Image from 'next/image';
import Roomlist from '@/app/components/Roomlist';
import React, { useEffect, useState } from 'react';

type Mainmenue2props = {
    genbaid: number;
};

type Roomtable = {
    constructionphase: string;
    location: string;
    creationdate: Date;
    coordinator: string;
    model3did: string;
    siteid: number;
    id: number;
    imagepath: string;
};


const Mainmenue2: React.FC<Mainmenue2props> = ({ genbaid }) => {
    const [RoomTable, setRoomTable] = useState<Roomtable[]>([]);

    useEffect(() => {
        async function fetchData() {
            // 文字列テンプレートリテラルを使用して、動的にURLを生成
            const response = await fetch(`/api/getroomtable/${genbaid}`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            });
            const data = await response.json();
            if (data && data.result && Array.isArray(data.result.rows)) {
                setRoomTable(data.result.rows);
            }
        }

        fetchData();
    }, [genbaid]);

    return (
        <div>

            {RoomTable.map((site) => (
                <Link key={site.id} href={`/product_3Dview/${site.id}`} passHref>
                    <div key={site.id} style={roomListStyle}> {/* ここで `site.id` を `key` として使用 */}
                        <Roomlist
                            Construction_Phase={site.constructionphase}
                            Created_Date={site.coordinator}
                            personInCharge={site.location}
                            Model={"3Dモデル"}
                            roomid={site.id}
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

