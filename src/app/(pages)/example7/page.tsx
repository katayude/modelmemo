'use client'
import React, { useState } from 'react';

function PinForm() {
    const [x, setx] = useState('');
    const [y, sety] = useState('');
    const [z, setz] = useState('');
    const [model3did, setmodel3did] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/postpintable', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ x, y, z, model3did })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle the response data
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                x:
                <input type="text" value={x} onChange={(e) => setx(e.target.value)} />
            </label>
            <label>
                y:
                <input type="text" value={y} onChange={(e) => sety(e.target.value)} />
            </label>
            <label>
                z:
                <input type="text" value={z} onChange={(e) => setz(e.target.value)} />
            </label>
            <label>
                model3did:
                <input type="text" value={model3did} onChange={(e) => setmodel3did(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PinForm;
