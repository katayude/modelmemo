// /pages/example.tsx

"use client";

import React, { useEffect, useState } from 'react';

type ConstructionSite = {
    id: number;
    building: string;
    location: string;
    manager: string;
    created_at: Date;
};

export default function Example() {
    const [constructionSites, setConstructionSites] = useState<ConstructionSite[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/get-constructionsites');
                const data = await response.json();
                if (Array.isArray(data.result.rows)) {
                    setConstructionSites(data.result.rows);
                } else {
                    // 適切なエラーハンドリングを行う
                    console.error('Data is not an array:', data.result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Construction Sites</h1>
            <ul>
                {constructionSites.map((site, index) => (
                    <li key={index}>
                        {site.building} - {site.location} - {site.manager}
                    </li>
                ))}
            </ul>
        </div>
    );
}
