import React, { Suspense } from 'react';
import Table from "@/app/screen5/table";
import Search from "@/app/screen5/search";
import ListUser from "@/app/screen5/list-user";
import Paging from "@/app/screen5/paging";


export default async function Page({ searchParams }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div>
            <h1>Search and paging</h1>
            <Suspense>
                <Search/>
                <Paging/>
            </Suspense>

            <Suspense key={query + currentPage}>
                <Table query={query} currentPage={currentPage}/>
            </Suspense>

            <Suspense>
                <ListUser currentPage={currentPage}/>
            </Suspense>


        </div>
    );
}
