'use client';
import { useEffect, useState } from 'react';

export default function DynamicComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response1 = await fetch('https://catfact.ninja/fact');
            const data = await response1.json();
            setData(data);
        }
        fetchData();
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="flex flex-col">
            <div>
                data1:
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            <div>
                <strong>Fact:</strong> {data.fact}
            </div>
            <div>
                <strong>Length:</strong> {data.length}
            </div>
        </div>
    );
}
