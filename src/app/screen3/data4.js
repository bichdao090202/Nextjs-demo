import React from "react";

export default async function Data4() {
    const response = await  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await response.json();


    return (
        <div className="flex flex-col">
            <div>
                data4:
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    )
}