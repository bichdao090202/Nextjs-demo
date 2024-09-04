import React from 'react';

export default async function ItemSearchResult({query, currentPage}) {
    const response = await fetch(`https://api.thecatapi.com/v1/images/${query}`);
    const cat = await response.json();

    if (query.length < 1) {
        return (
            <div>
                Enter id you want to search...
            </div>
        )
    }

    return (
        <div>
            <div className="text-bold">
                Search results
            </div>
            <div>
                {/*<div>{JSON.stringify(cat)}</div>*/}
                <div className="flex w-36 flex-col m-3 border-2 border-amber-500 justify-center items-center"
                     key={cat.id}>
                    <div>{query}</div>
                    <img src={cat.url} alt={`${cat.id}`} className="w-20 h-20"/>
                    <p>Id: {cat.id}</p>
                    <p>Width: {cat.width}</p>
                    <p>Height: {cat.height}</p>
                </div>
            </div>
        </div>
    );
}