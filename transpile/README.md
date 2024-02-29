# Description
`app.js` is a Node.js server file that creates a simple HTTP server listening on port 3000. It defines a single route, `/hello`, which expects a query parameter `user`. When a GET request is made to this route, the server responds with a plain text message greeting the user. If any other path is requested, the server responds with a 404 status code. The server is designed to shut down after handling a single request.

# Test
```bash
npm test
```

# Task
Ask code AI tool to transpile app.js to app.py (using FastAPI or Flask server). Run `npm run test:py` to be sure code is transpiled perfectly


