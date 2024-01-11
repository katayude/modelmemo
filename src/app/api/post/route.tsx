import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {

    //console.log(request)

    const body = await request.json()

    //console.log(body)

    const returnBody = `${body.name}のテキストはAPIのPOSTメソッドで受け取りました`

    return new Response(JSON.stringify({ body: returnBody }))
}