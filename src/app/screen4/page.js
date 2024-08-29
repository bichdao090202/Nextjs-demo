import StaticComponent from "@/app/screen4/static-component";
import DynamicComponent from "@/app/screen4/dynamic-component";
import {Suspense} from "react";
export const experimental_ppr = true;

export default function Page() {
    return (
        <div className="flex flex-col">
            <div>
                <h1>Partial Prerendering (PPR)</h1>
                <p>Kết hợp SSR và CSR</p>
            </div>
            <div>
                <div>SSG</div>
                <StaticComponent></StaticComponent>
            </div>

            <div>
                <div>Dynamic</div>
                <Suspense>
                    <DynamicComponent></DynamicComponent>
                </Suspense>
            </div>
        </div>
    );
}
