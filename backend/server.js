require('dotenv').config();

const express = require('express');
const todosRoutes = require('./routes/todos');


// express app
const app = express();

// middleware
app.use(express.json()); //Any requests that comes it looks if it has some body to the request, some data that we are sending to the server. If it does, it passes it and attaches it to the request object so that we can access it in the request handler.

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome to the app!'});
// });
app.use('/api/todos', todosRoutes);


// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on PORT', process.env.PORT);
});

