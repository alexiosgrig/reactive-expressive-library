const express = require('express') 

const app = express()
const port = 3000

const papadesId = (req,res)=>{
    console.log(req.params)
    res.status(200).json({data:req.params.id})
}

const papadesRouter = express.Router();
app.use('/api/v1/papades',papadesId)





papadesRouter.get('/',papadesId)
papadesRouter.get('/:id',papadesId)



// app.get('/',(res,req)=>{
//     console.log('response')
//     req.json({papades: 'papades agori mou'})
// })
// app.get('/papades/:id',papadesId)
// app.get('/done',()=>{   
//     console.log('done')
// })
// app.get('/zoo',()=>{
//     console.log('zoo')
// })
// app.get('/vet',()=>{
//     console.log('vet')
// })
// app.get('/music',()=>{
//     console.log('music')
// })

app.listen(port,()=>{
    console.log('server is up and running')
})