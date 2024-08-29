'use client';
import {useState} from "react";
import LoginText from "@/app/login/logintext";
import Link from "next/link";

export default function Page() {
    let [username, setUsername] = useState("");
    return (
        <div className="flex flex-col bg-gray-50 items-center">
            <h1>Test template, layout, child component in a page</h1>
            <LoginText/>
            <div className="flex flex-col items-center ">
                <input type="text" className="w-56 h-8 border-2" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className=" w-56 h-8 border-2 mt-2" placeholder="password"  />
                <Link href='/screen1'>
                    <button className="mt-6 w-32 h-12 bg-emerald-600">Screen 1</button>
                </Link>
                <Link href='/screen2'>
                    <button className="mt-6 w-32 h-12 bg-emerald-600">Screen 2</button>
                </Link>
                <Link href='/screen3'>
                    <button className="mt-6 w-32 h-12 bg-emerald-600">Screen 3</button>
                </Link>
                <Link href='/screen4'>
                    <button className="mt-6 w-32 h-12 bg-emerald-600">Screen 4</button>
                </Link>
            </div>
        </div>
    );
}
