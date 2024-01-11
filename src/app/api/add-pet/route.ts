import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const { petName, ownerName } = await request.json();


        console.log(`Ready to Added ${petName}, ${ownerName} to the database`);

        if (!petName || !ownerName) throw new Error('Pet and owner names required');

        await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
        console.log(`Added ${petName}, ${ownerName} to the database`);

        //const pets = await sql`SELECT * FROM Pets;`;
        //response.status(200).json({ pets });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const pets = await sql`SELECT * FROM Pets;`;
    return NextResponse.json({ pets }, { status: 200 });
}
