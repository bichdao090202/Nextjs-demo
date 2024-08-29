'use client'
import {useEffect, useState} from "react";
import Loading from "@/app/screen1/loading";

export default function Page({}) {
    const [jsonData, setJsonData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(2);
    const [inputPage, setInputPage] = useState(2);
    // const [user,setUser] = useState("");
    // const [setCardId,seSetCardId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://reqres.in/api/users?page=${page}`);
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page]);

    if (loading) {
        return Loading();
    }

    const handleClick = () => {
        setPage(parseInt(inputPage, 10));
    };

    const handleInputChange = (e) => {
        setInputPage(e.target.value);
    };

    return <div>
        {/*{user!==""?<InfoCard onSetCardId={seSetCardId} user={user}></InfoCard>:null}*/}


        <div>
            <input
                type="number"
                value={inputPage}
                onChange={handleInputChange}
                placeholder="Enter page number"
            />
            <button onClick={handleClick}>Load Page</button>
        </div>

        <h1>User List</h1>
        <div>
            {jsonData.data.map(user => (
                <div key={user.id} style={{marginBottom: '20px'}}>
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`}
                         style={{borderRadius: '50%', width: '100px', height: '100px'}}/>
                    <h2>Full name: {user.first_name} {user.last_name}</h2>
                    <p>Id: {user.id}</p>
                    <p>Email: {user.email}</p>
                    <button
                        onClick={() => setCardId(user.id)}
                    >View</button>
                </div>
            ))}
        </div>
        <footer>
            <p>{jsonData.support.text}</p>
            <a href={jsonData.support.url} target="_blank" rel="noopener noreferrer">Support Link</a>
        </footer>
    </div>
}

function InfoCard({onSetCardId}){
    let [id,setId] = useState(props.user.id);
    const [user,setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://reqres.in/api/users/${id}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };
        fetchData();
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div key={user.id} style={{marginBottom: '20px'}}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`}
                 style={{borderRadius: '50%', width: '100px', height: '100px'}}/>
            <h2>Full name: {user.first_name} {user.last_name}</h2>
            <p>Id: {user.id}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}