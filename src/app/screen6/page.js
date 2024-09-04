import React, { Suspense } from 'react';
import ItemSearchResult from "@/app/screen6/item-search-result";
import Search from "@/app/screen6/search";
import ListCat from "@/app/screen6/list-cat";
import Paging from "@/app/screen6/paging";
import ListCatAPI from "@/app/screen6/list_api";

export default async function Page({ searchParams }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className="flex flex-col w-screen h-full bg-amber-100 p-3">
            <div>
                <p className="text-bold">Search and paging with Cat API</p>
            </div>

            <div>
                <ListCatAPI/>
            </div>

            <Search/>

            <Suspense key={query + currentPage}>
                <ItemSearchResult query={query} currentPage={currentPage}/>
            </Suspense>

            <Suspense>
                <ListCat currentPage={currentPage}/>
            </Suspense>

            <Paging/>
        </div>
    );
}
