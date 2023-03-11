const express = require("express");
const app = express();
const path = require('path');


const port = process.env.PORT || 4500

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// Alternate way to render html file
// app.use(express.json())
// app.set('views', path.join(__dirname, 'views'));

// app.get('/', (req, res) => {
//     res.sendFile('index.html', { root: path.join(__dirname, 'views') });
//   });
  

app.listen(port, () => {
    console.log("Server is up at " + port);
  });