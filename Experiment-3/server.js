const http = require("http");
const url = require("url");

//create an http server

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  // Extract form data from query string
  const name = query.name || "Guest";
  const age  = query.age || "Unknown";
  const email = query.email || "Not provided";

  // Send response header
  res.writeHead(200, { "Content-Type": "text/html" });
 //Generate response with submitted data
  res.write('<h1>Form Data Received<h1>')
  res.write('<p>Here is the data you submitted<p>')
  res.write(`<ul>
    <li><strong>Name:</strong> ${name}</li>
    <li><strong>Age:</strong> ${age}</li>
    <li><strong>Email:</strong> ${email}</li>
  </ul>`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
