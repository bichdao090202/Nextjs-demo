'use client';
import { usePathname } from 'next/navigation';

export default function Template({ children }) {
    const pathname = usePathname();
    return (
        <div className="w-screen flex flex-col">
            <h1 className="italic">Now your path is: <b>{pathname}</b></h1>
            <div className="justify-center">{children}</div>
        </div>
    )
}
