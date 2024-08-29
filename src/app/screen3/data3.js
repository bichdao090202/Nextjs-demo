import React from "react";

export default async function Data3() {
    const response = await  fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await response.json();

    return (
        <div className="flex flex-col">
            <div>
                data3:
                <div className="joke">
                    <p><strong>Type:</strong> {data.type}</p>
                    <p><strong>Question:</strong> {data.setup}</p>
                    <p><strong>Answer:</strong> {data.punchline}</p>
                    <p><strong>ID:</strong> {data.id}</p>
                </div>
            </div>
        </div>
    )
}