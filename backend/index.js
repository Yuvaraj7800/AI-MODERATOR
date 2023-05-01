const express = require('express');
const userRouter = require('./routers/userRouter');


const cors = require('cors')




const app = express();
const port = 5000;

app.use(cors({
    orgin: [`http://localhost:3000`]
}))


app.use(express.json());

app.use('/user', userRouter);

// routes
app.get('/', (req, res) => {
    res.send('Working Perfectly');
});

app.get('/home', (req, res) => {
    res.send('Response from Home');
});

app.get('/add', (req, res) => {
    res.send('Response from Add');
})

app.listen( port, () => { console.log('server started') } ); 