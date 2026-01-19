"use client";

import { useEffect } from "react";

export default function AboutError({ error, reset } : { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
      console.error("Error in About Page:", error);
    }, [error]);
    
    return (
      <div>
        <h1 className="text-2xl font-bold text-center">Something went wrong</h1>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={reset}>Retry</button>
      </div>
    );
}