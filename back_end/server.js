let express = require('express');
let server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const ToDo = require('./schema.js');


server.use(cors());
server.use(express.json());

mongoose.connect('mongodb://localhost:27017/toDo',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

server.post('/todolist', async (req, res) => {
    const task = req.body.task;
    const thing = new ToDo({
        tasks:task
    })
  
    thing.save();
    console.log(req.body);
    res.json({
        message: 'success',
        code: 200
    })
  });

  server.get('/todolist', async (req, res) => {
    const query = await ToDo.find({});
    //console.log(query[0].tasks)
    res.json({message: query});
  })

  server.delete('/todolist', async (req, res) => {

  })
// server.get('insert', async (req, res) => {
//      const query = await Users.find({role: req.params.role});
//      console.log("asd", query);
//      res.json({message: query});
//    })

server.listen(8000, () => {
    console.log("Server is on");
})