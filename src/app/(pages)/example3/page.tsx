// pages/example.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Genbalist from '@/app/components/Genbalist';

type ConstructionSite = {
    id: number;
    building: string;
    location: string;
    manager: string;
    created_at: Date;
    imagepath: string;
};

export default function ExamplePage() {
    const [constructionSites, setConstructionSites] = useState<ConstructionSite[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/get-constructionsites');
            const data = await response.json();
            if (data && data.result && Array.isArray(data.result.rows)) {
                setConstructionSites(data.result.rows);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Genbalist</h1>
            {constructionSites.map((site, index) => (
                <Genbalist
                    key={index}
                    building={site.building}
                    location={site.location}
                    personInCharge={site.manager}
                    imagepath={site.imagepath}
                />
            ))}
        </div>
    );
}
