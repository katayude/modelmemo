import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
        const id = params.id;
        // Sitetableとgenbaimageを結合し、条件に一致するレコードを取得する
        const result = await sql`
            SELECT model3dtable.model3dpath
            FROM model3dtable
            WHERE model3dtable.id = ${id};
            `;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}