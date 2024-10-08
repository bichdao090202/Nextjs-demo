'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search(){
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
        <div>
            <input type={'text'} placeholder={'Search...'}
                   className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                   onChange={(e) => {
                       handleSearch(e.target.value);
                   }}
                   defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}