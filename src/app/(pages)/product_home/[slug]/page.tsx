// pages/example.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Genbalist from '@/app/components/Roomlist';

type Roomtable = {
    constructionphase: string;
    location: string;
    creationdate: Date;
    coordinator: string;
    model3did: string;
    siteid: number;
    id: number;
};

export default function ExamplePage({ params }: { params: { slug: string } }) {
    const [RoomTable, setRoomTable] = useState<Roomtable[]>([]);

    useEffect(() => {
        async function fetchData() {
            // 文字列テンプレートリテラルを使用して、動的にURLを生成
            const response = await fetch(`/api/getroomtable/${params.slug}`);
            const data = await response.json();
            if (data && data.result && Array.isArray(data.result.rows)) {
                setRoomTable(data.result.rows);
            }
        }

        fetchData();
    }, [params.slug]); // useEffectの依存配列にparams.slugを追加

    return (
        <div>
            <h1>Genbalist</h1>
            {RoomTable.map((site, index) => (
                <Genbalist
                    Construction_Phase={site.constructionphase}
                    Created_Date={site.coordinator}
                    personInCharge={site.location}
                    Model={"3Dモデル"}
                />
            ))}
        </div>
    );
}
