const express = require('express');
const userRouter = require('./routers/userRouter');
const extensionRouter = require('./routers/extensionRouter');
const utilRouter = require('./routers/util');
const commentRouter = require('./routers/CommentRouter');
const reviewRouter = require('./routers/reviewRouter');
const contactUsRouter = require('./routers/contactUsRouter');
const analysisRouter = require('./routers/analysisRouter');
const countRouter = require('./routers/countRouter');

const cors = require('cors')


const app = express();
const port = 5000;

app.use(cors({
    orgin: [`http://localhost:3000`]
}))


app.use(express.json());
app.use(express.static('./static/uploads'));
app.use(express.static('./archives'));
app.use(express.static('./pluginScripts'));

app.use('/user', userRouter);
app.use('/extension', extensionRouter);
app.use('/util', utilRouter);
app.use('/comment', commentRouter);
app.use('/review', reviewRouter);
app.use('/contactUs', contactUsRouter);
app.use('/analysis', analysisRouter);
app.use('/count', countRouter);

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