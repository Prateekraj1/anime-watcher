"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
    
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="px-[16px] pt-[96px] pb-[48px] min-h-[calc(100vh_-_74px)] sm:pt-[36px]">
            <div className="max-w-[1224px] mx-auto text-center">
                <div className="h-02-bold">Oops! Something went wrong.</div>
                <div>
                    <button className="btn-primary mt-[20px] py-[11px] w-[156px] rounded-[36px]" onClick={reset}>Try again</button>
                </div>
            </div>
        </div>
    );
};

export default Error;