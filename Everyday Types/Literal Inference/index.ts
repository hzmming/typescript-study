function handleRequest(url: string, method: "GET" | "POST") {
  // ...
}

const req = { url: "https://example.com", method: "GET" };

// ERROR!!!
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'
// handleRequest(req.url, req.method);

// Success
const req2 = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req.url, req2.method);

// Success
const req3 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req3.method);

export {};
