"use client";

import Link from 'next/link';
import Image from 'next/image';
import Roomlist from '@/app/components/Roomlist';
import React, { useEffect, useState } from 'react';

type Mainmenue2props = {
    roomid: number;
};

type Roomtable = {
    constructionphase: string;
    location: string;
    creationdate: Date;
    coordinator: string;
    model3did: string;
    siteid: number;
    id: number;
};


const Mainmenue2: React.FC<Mainmenue2props> = ({ roomid }) => {
    const [RoomTable, setRoomTable] = useState<Roomtable[]>([]);

    useEffect(() => {
        async function fetchData() {
            // 文字列テンプレートリテラルを使用して、動的にURLを生成
            const response = await fetch(`/api/getroomtable/${roomid}`);
            const data = await response.json();
            if (data && data.result && Array.isArray(data.result.rows)) {
                setRoomTable(data.result.rows);
            }
        }

        fetchData();
    }, [roomid]);

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

            {RoomTable.map((site) => (
                <div key={site.id} style={roomListStyle}> {/* ここで `site.id` を `key` として使用 */}
                    <Roomlist
                        Construction_Phase={site.constructionphase}
                        Created_Date={site.coordinator}
                        personInCharge={site.location}
                        Model={"3Dモデル"}
                    />
                </div>
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

