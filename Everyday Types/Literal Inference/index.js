"use strict";
exports.__esModule = true;
function handleRequest(url, method) {
    // ...
}
var req = { url: "https://example.com", method: "GET" };
// ERROR!!!
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'
// handleRequest(req.url, req.method);
// Success
var req2 = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req2.method);
// Success
var req3 = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req3.method);
