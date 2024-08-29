'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Paging() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const createPageURL = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        // return `${pathname}?${params.toString()}`;
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div>
            <select
                onChange={(e) => {
                createPageURL(e.target.value);
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>
    )


}