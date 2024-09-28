import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="light relative flex flex-col items-center justify-items-center bg-white h-screen w-screen">
            {children}
        </div>
    );
}
