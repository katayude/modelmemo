import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
        // URLからsiteidを取得する（例: ?siteid=3）
        const id = params.id;


        // siteidが指定されていない場合はエラーを返す
        if (!id) {
            return NextResponse.json({ error: 'No id provided' }, { status: 400 });
        }

        // SQLクエリでsiteidを使用する
        const result =
            await sql`SELECT Pin.*, phototable.imagepath
                        FROM Pin
                        JOIN phototable ON Pin.id = phototable.Pinid
                        WHERE Pin.Model3did = ${id};`;

        console.log(result);


        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}