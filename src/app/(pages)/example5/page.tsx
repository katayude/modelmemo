"use client"
import { useState } from 'react'

export default function Home() {
    const [name, setName] = useState('')
    const [postedData, setPostedData] = useState('')

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name }),
        })

        const data = await res.json()
        setPostedData(data.body)
    }
    return (
        <main>
            <div>
                <h1>Next JS APIのテスト</h1>
                <form onSubmit={onSubmitHandler} className='flex flex-col justify-center' action='/api/form' method='POST'>
                    <input value={name} onChange={onChangeHandler} type='text' name='name' placeholder='名前' />
                    <button type='submit'>送信</button>
                </form>

                <p>APIから受け取った値:{postedData}</p>
            </div>
        </main >
    )
}