

'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import {useState} from "react";

export default function Search(){
    const [searchId, setSearchId] = useState('');
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    function handleSearch(term){
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex flex-row justify-center items-center w-full">
            <input type={'text'} placeholder={'Search...'}
                   className="w-2/3 peer block rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                   onChange={(e) => {
                       setSearchId(e.target.value);
                   }}
                   // defaultValue={searchParams.get('query')?.toString()}
            />
            <button className="w-20"
                onClick={()=>handleSearch(searchId)}
            >Search</button>
        </div>
    )
}