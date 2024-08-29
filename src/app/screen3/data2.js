import React from "react";

export default async function Data2() {
    const response1 = await  fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response1.json();

    return (
        <div className="dog-image">
            <div>
                data2:
            </div>
            {data.status === 'success' ? (
                <img src={data.message} alt="Dog" style={{width: '300px', height: 'auto'}}/>
            ) : (
                <p>Failed to load image.</p>
            )}
        </div>
    )
}