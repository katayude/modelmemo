import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // SitetableとPhototableを結合し、条件に一致するレコードを取得する
        const result = await sql`
            SELECT Sitetable.*, PhotoTable.imagepath 
            FROM Sitetable
            JOIN PhotoTable ON Sitetable.id = PhotoTable.pinid;
        `;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
