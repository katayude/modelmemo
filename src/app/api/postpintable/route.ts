import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const { x, y, z, model3did } = await request.json();


        console.log(`Ready to Added ${x}, ${y}, ${z}, ${model3did} to the database`);

        if (!x || !y || !z || !model3did) throw new Error('Pet and owner names required');

        await sql`INSERT INTO Pintable (Xcoordinate, Ycoordinate, Zcoordinate, Model3did) VALUES (${x}, ${y}, ${z}, ${model3did});`;
        console.log(`Added ${x}, ${y}, ${z}, ${model3did} to the database`);

        //const pets = await sql`SELECT * FROM Pets;`;
        //response.status(200).json({ pets });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const pets = await sql`SELECT * FROM Pets;`;
    return NextResponse.json({ pets }, { status: 200 });
}
