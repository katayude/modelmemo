"use client"

import type { NextPage } from 'next';
import React, { useState } from 'react';

interface PinProps {
    xcoordinate: number;
    ycoordinate: number;
    zcoordinate: number;
    model3did: number;
}

const EXAMPLE3: NextPage = () => {
    const [pinProps, setPinProps] = useState<PinProps>({
        xcoordinate: 100,
        ycoordinate: 200,
        zcoordinate: 300,
        model3did: 400
    });

    async function sendPinProps(pinProps: PinProps) {
        try {
            const response = await fetch('/api/postpintable', { // APIのパスを正確に指定してください
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pinProps })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendPinProps(pinProps);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setPinProps({
            ...pinProps,
            [e.target.name]: isNaN(value) ? 0 : value // NaNの場合は0に設定
        });
    };


    return (
        <>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="xcoordinate"
                    value={pinProps.xcoordinate}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="ycoordinate"
                    value={pinProps.ycoordinate}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="zcoordinate"
                    value={pinProps.zcoordinate}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="model3did"
                    value={pinProps.model3did}
                    onChange={handleChange}
                />
                <button type="submit">送信</button>
            </form>
        </>
    );
};

export default EXAMPLE3;
