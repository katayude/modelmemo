'use client'
import React, { useState } from 'react';

function PetForm() {
    const [petName, setPetName] = useState('');
    const [ownerName, setOwnerName] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/add-pet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ petName, ownerName })
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
                Pet Name:
                <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
            </label>
            <label>
                Owner Name:
                <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PetForm;
