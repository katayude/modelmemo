import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // Sitetableとgenbaimageを結合し、条件に一致するレコードを取得する
        const result = await sql`
            SELECT Sitetable.*, genbaimage.imagepath
            FROM Sitetable
            INNER JOIN genbaimage
            ON Sitetable.id = genbaimage.id`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
