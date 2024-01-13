import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
        // URLからsiteidを取得する（例: ?siteid=3）
        const siteid = params.id;

        // siteidが指定されていない場合はエラーを返す
        if (!siteid) {
            return NextResponse.json({ error: 'No siteid provided' }, { status: 400 });
        }

        // SQLクエリでsiteidを使用する
        const result =
            await sql`
            SELECT roomtable.*, roomimage.imagepath
            FROM roomtable
            INNER JOIN roomimage
            ON roomtable.id = roomimage.roomid
            WHERE roomtable.Siteid = ${siteid};`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
