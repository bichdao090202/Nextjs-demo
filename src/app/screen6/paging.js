'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Paging() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const createPageURL = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    };
    const listPageNumber = [1,2,3,4,5,6,7,8,8,9,10]
    return (
        <div className="group-row">
            {listPageNumber.map((pageNumber,index) => (
                <button className="w-5" key={index}
                        onClick={(e) => {
                            createPageURL(pageNumber);
                        }}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    )
}