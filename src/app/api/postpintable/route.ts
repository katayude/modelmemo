import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

function generateUniqueId() {
    return uuidv4();
}

interface PinProps {
    xcoordinate: number;
    ycoordinate: number;
    zcoordinate: number;
    model3did: number;
}

// POSTメソッドを名前付きエクスポートとして定義
export async function POST(request: NextApiRequest, response: NextApiResponse) {
    const { pinProps }: { pinProps: PinProps } = request.body;

    const uniqueId = generateUniqueId();

    console.log('pinProps', pinProps);

    try {
        console.log('pinProps', pinProps);
        const result = await sql`
            INSERT INTO Pintable (Id, Xcoordinate, Ycoordinate, Zcoordinate, Model3did)
            VALUES (${uniqueId}, ${pinProps.xcoordinate}, ${pinProps.ycoordinate}, ${pinProps.zcoordinate}, ${pinProps.model3did});`;
        response.status(200).json(result);
    } catch (error: any) {
        response.status(500).json({ error: error.message });
    }
}
