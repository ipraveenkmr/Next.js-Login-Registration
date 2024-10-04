'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="px-6 py-2 bg-red-200 rounded-md text-2xl cursor-pointer"
                onClick={() => router.push("/")}
            >
                Logout
            </div>
        </div>
    )
}
