# Description

This file contains integration tests for a server application. The tests are written using Jest and axios to make HTTP requests to the server. The server is assumed to be a Python application, as indicated by the spawn command used to start the server process before all tests are run.

The tests cover the following scenarios:
- Retrieving all items with a GET request to the /items endpoint.
- Creating a new item with a POST request to the /items endpoint.
- Retrieving a single item by ID with a GET request to the /items/:id endpoint.
- Updating an item with a PUT request to the /items/:id endpoint.
- Deleting an item with a DELETE request to the /items/:id endpoint.

Each test checks for the correct HTTP status code and content type, and when applicable, the correct response body.

# Test
```bash
npx jest --watchAll=false server.test.js
#   console.error
#     stderr: /home/vganzin/.pyenv/versions/3.9.0/bin/python: can't open file '/home/vganzin/work/geekle/test/code-for-test/server.py': [Errno 2] No such file or directory
    

#        9 |   serverProcess = spawn('python', ['server.py']); // Adjust the path to the actual location of server.go
#       10 |   serverProcess.stderr.on('data', (data) => {
#     > 11 |     console.error(`stderr: ${data}`);
#          |             ^
#       12 |   });
#       13 |   serverProcess.stdout.on('data', (data) => {
#       14 |     console.log(`stdout: ${data}`);

#       at Socket.error (server.test.js:11:13)


#  RUNS  ./server.test.js

```

# Task
Ask code completion tool to generate server.py that will work with server.text.js
