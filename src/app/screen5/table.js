import React from 'react';

export default async function Table({query, currentPage}) {
    const response = await fetch(`https://reqres.in/api/users/${query}`);
    const json = await response.json();
    const data = json.data;

    if (query.length < 1) {
        return (
            <div>
                Enter id user you want to search...
            </div>
        )
    }

    return (
        <div>
            <div>
                <div style={{
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '300px',
                    textAlign: 'center'
                }}>
                    <img src={data.avatar} alt={`${data.first_name} ${data.last_name}`}
                         style={{borderRadius: '50%', width: '100px', height: '100px'}}/>
                    <h2>{data.first_name} {data.last_name}</h2>
                    <p>Email: {data.email}</p>
                </div>
            </div>
        </div>
    );
}