import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { NextRequest } from "next/server";
import { v4 as uuidv4 } from 'uuid'; // UUIDライブラリのインポート

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const { x, y, z, model3did } = await request.json();


        console.log(`Ready to Added ${x}, ${y}, ${z}, ${model3did} to the database`);

        if (!x || !y || !z || !model3did) throw new Error('Pet and owner names required');

        const id = uuidv4();

        console.log(`id: ${id}`);

        await sql`INSERT INTO Pintable (Id, Xcoordinate, Ycoordinate, Zcoordinate, Model3did) VALUES (${id}, ${x}, ${y}, ${z}, ${model3did});`;
        console.log(`Added ${x}, ${y}, ${z}, ${model3did} to the database`);

        //const pets = await sql`SELECT * FROM Pets;`;
        //response.status(200).json({ pets });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const pin = await sql`SELECT * FROM Pintable;`;
    return NextResponse.json({ pin }, { status: 200 });
}
