const express = require('express');
const {Worker} = require('worker_threads')


const app = express();

const PORT = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    return res.status(200).json({
        message: "ALL OK!!"
    })
})

app.get('/non-blocking',(req,res)=> {
    return res.status(200).send("This page is non-blocking");
})

app.get('/blocking',(req,res) => {
    
    const worker = new Worker('./worker.js');

    worker.on('message',(data) => {
        return res.status(200).send(`data is ${data}`);
    })

    worker.on('error',(error) => {
        return res.status(404).send(`error occured: ${error}`)
    })

})

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`)
});