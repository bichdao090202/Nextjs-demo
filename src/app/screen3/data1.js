import React from "react";

export default async function Data1() {
    const response1 = await  fetch('https://catfact.ninja/fact')
    const data = await response1.json();
    console.log(data)

    return (
        <div className="flex flex-col">
            <div>
                data1:
                <pre>{JSON.stringify(data, null, 2)}</pre> {/* Render toàn bộ data dưới dạng JSON */}
            </div>

            <div>
                <strong>Fact:</strong> {data.fact}
            </div>
            <div>
                <strong>Length:</strong> {data.length}
            </div>
        </div>
    )
}