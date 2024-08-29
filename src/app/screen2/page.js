import React from "react";

export default async function Page(){
    let response1, response2, response3, response4, response5;
    let data1, data2, data3, data4, data5;

    async function fetchData() {
        response1 = await  fetch('https://catfact.ninja/fact')
        data1 = await response1.json();
        response2 = await  fetch('https://dog.ceo/api/breeds/image/random')
        data2 = await response2.json();
        response3 = await  fetch('https://official-joke-api.appspot.com/random_joke')
        data3 = await response3.json();
        response4 = await  fetch('https://api.genderize.io/?name=luc')
        data4 = await response4.json();
        response5 = await  fetch('https://api.nationalize.io/?name=nathaniel')
        data5 = await response5.json();
    }

    await fetchData();

    return (
        <div className="flex flex-col">
            <div>
                <p>Screen2</p>
            </div>
            <div>
                data1:
                {JSON.stringify(data1, null, 2)}
            </div>

            <div>
                data2:
                {JSON.stringify(data2, null, 2)}
            </div>
            <div>
                data3:
                {JSON.stringify(data3, null, 2)}
            </div>
            <div>
                data4:
                {JSON.stringify(data4, null, 2)}
            </div>
            <div>
                data5:
                {JSON.stringify(data5, null, 2)}
            </div>
        </div>
    )
}
