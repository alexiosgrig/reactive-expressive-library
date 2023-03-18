const express = require('express') 

const app = express()
const port = 3000

app.get('/',(res,req)=>{
    console.log('response')
    req.json({papades: 'papades agori mou'})
})
app.get('/papades',()=>{
    console.log('papades')
})
app.get('/done',()=>{
    console.log('done')
})
app.get('/zoo',()=>{
    console.log('zoo')
})
app.get('/vet',()=>{
    console.log('vet')
})
app.get('/music',()=>{
    console.log('music')
})

app.listen(port,()=>{
    console.log('server is up and running')
})