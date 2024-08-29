// 'use client' // why it have many request
import {Suspense} from 'react';
import Data1 from "@/app/screen3/data1";
import Data2 from "@/app/screen3/data2";
import Data3 from "@/app/screen3/data3";
import Data4 from "@/app/screen3/data4";

export default async function Page(){
    // const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col">
            <div>
                <p>Screen3</p>
                <p>Tách component</p>
            </div>
            <Suspense>
                <Data1 />
            </Suspense>
            <Suspense>
                <Data2 />
            </Suspense>
            <Suspense>
                <Data3 />
            </Suspense>
            {/*<Suspense>*/}
            {/*    <Data4 />*/}
            {/*</Suspense>*/}
            {/*<div>*/}
            {/*    {count}*/}
            {/*    <button onClick={() => setCount(count + 1)}>Click</button>*/}
            {/*</div>*/}
        </div>
    )
}
