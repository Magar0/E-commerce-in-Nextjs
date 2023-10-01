'use client'

import { useRouter } from 'next/navigation'

export default function GoBack() {
    const router = useRouter()

    return (
        <button type="button" className='button' onClick={() => router.back({ scroll: false })} >
            Go Back
        </button >
    )
}