"use client";

import React, { useState } from "react";

export default function BooksPage() {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (method: string, body?: any) => {
    setError(null);
    setResponse(null);

    try {
      const options: RequestInit = { method };
      if (body) {
        options.body = JSON.stringify(body);
        options.headers = { "Content-Type": "application/json" };
      }

      const res = await fetch("/api/books", options);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");
      setResponse(JSON.stringify(data, null, 2)); // Beautify JSON response
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Books API UI</h1>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => fetchData("GET")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          GET Data
        </button>
        <button
          onClick={() => fetchData("POST", { name: "John Doe", age: 30 })}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          POST Data
        </button>
        <button
          onClick={() => fetchData("PUT", { id: 1, name: "Jane Doe", age: 25 })}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          PUT Data
        </button>
        <button
          onClick={() => fetchData("DELETE", { id: 1 })}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          DELETE Data
        </button>
      </div>

      {/* Display Response */}
      {response && (
        <div className="bg-white p-4 rounded shadow w-full max-w-md">
          <h2 className="text-lg font-bold">Response:</h2>
          <pre className="text-sm bg-gray-50 p-2 rounded">{response}</pre>
        </div>
      )}

      {/* Display Error */}
      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded shadow w-full max-w-md">
          <h2 className="text-lg font-bold">Error:</h2>
          <pre className="text-sm">{error}</pre>
        </div>
      )}
    </main>
  );
}
