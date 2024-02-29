const { createServer } = require('http')
const port = 3000;

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/hello') {
    const user = url.searchParams.get('user');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello ${user}`, () => process.exit());
  } else {
    res.writeHead(404);
    res.end(() => process.exit());
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
