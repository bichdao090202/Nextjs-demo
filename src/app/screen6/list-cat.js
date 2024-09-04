import React from 'react';

export default async function ListCat({currentPage}){
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?page=${currentPage}&limit=10`);
    const json = await response.json();

    return(
        <div className="flex flex-col">
            <div className="text-bold">List Cat</div>
            <div className="flex flex-wrap">
                {json.map((cat,index) => (
                    <div className="flex flex-col m-3 w-1/5 border-2 border-amber-500 justify-center items-center"
                         key={index}>
                        <img src={cat.url} alt={`${cat.id}`} className="w-20 h-20"/>
                        <p>Id: {cat.id}</p>
                        <p>Width: {cat.width}</p>
                        <p>Height: {cat.height}</p>
                        {/*<button>View</button>*/}
                    </div>
                ))}
            </div>
        </div>
    )
}