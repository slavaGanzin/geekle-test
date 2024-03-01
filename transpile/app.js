const { createServer } = require('http') // Import the createServer method from the http module
const port = 3000; // Define the port number on which the server will listen

// Create a new server instance and define the request handler
const server = createServer((req, res) => {
  // Construct a URL object using the request URL and the host header
  const url = new URL(req.url, `http://${req.headers.host}`);
  // Check if the pathname of the URL is '/hello'
  if (url.pathname === '/hello') {
    // Retrieve the 'user' search parameter from the URL
    const user = url.searchParams.get('user');
    // Write the HTTP status code and content type to the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // End the response and send a greeting, then exit the process
    res.end(`Hello ${user}`, () => process.exit());
  } else {
    // If the pathname is not '/hello', write a 404 status code to the response header
    res.writeHead(404);
    // End the response with no content and exit the process
    res.end(() => process.exit());
  }
});

// Make the server start listening on the specified port and log that it's running
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
