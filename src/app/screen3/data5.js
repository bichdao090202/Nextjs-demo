import React from "react";

export default async function Data5() {
    const response1 = await  fetch('https://api.agify.io/?name=meelad')
    const data = await response1.json();

    if (data===undefined||data===null)
        return (
            <div>
                Loading...
            </div>
        )

    return (
        <div className="flex flex-col">
            <div>
                data5:
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    )
}