const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
//const expressHbs = require("express-handlebars");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);

// const http = require("http");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Assignment 1</title></head>");
//     res.write(
//       '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/users") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Assignment 1</title></head>");
//     res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
//     res.write("</html>");
//     return res.end();
//   }
//   // Send a HTML response with some "Page not found text
//   if (url === "/create-user") {
//     const body = [];
//     req.on("data", chunk => {
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody.split("=")[1]); // username=whatever-the-user-entered
//     });
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     res.end();
//   }
// });

// server.listen(3000);
