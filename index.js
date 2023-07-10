const app =require('./app');
const db =require('./config/db');
const userModel = require('./model/user.model')
const todoModel = require('./model/todo.model')

const port =3000;

app.get('/',(req,res)=>{
    res.send("hello wsadforddddddd111111111111111ddddddld")
})

app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
  });