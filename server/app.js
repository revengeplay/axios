const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const todoList = [{
    id : 1,
    text : "next",
    done : false
}]

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/todo',(req,res)=>{
    return res.json(todoList);
})

app.post('api/todo',(req,res)=>{
    const {text,done} = req.body;
    todoList.push({
        id:id++,
        text,
        done
    })
    return res.send('success')
})

app.listen(4000,()=>{
    console.log('server start')
})