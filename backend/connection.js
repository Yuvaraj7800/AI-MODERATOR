const mongoose = require('mongoose');

const url = `mongodb+srv://Yuvraj7800:yuvi@cluster0.nxkwhcr.mongodb.net/mern_class?retryWrites=true&w=majority`
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    // console.log(result);
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;

// synchronous
// asynchronous