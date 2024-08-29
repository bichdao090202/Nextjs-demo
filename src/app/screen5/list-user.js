import React from 'react';

export default async function ListUser({currentPage}){
    const response = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
    const json = await response.json();

    return(
        <div>
            List Users
            <div>
                {json.data.map(user => (
                    <div key={user.id} style={{marginBottom: '20px'}}>
                        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`}
                             style={{borderRadius: '50%', width: '100px', height: '100px'}}/>
                        <h2>Full name: {user.first_name} {user.last_name}</h2>
                        <p>Id: {user.id}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}