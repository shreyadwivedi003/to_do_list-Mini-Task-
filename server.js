const app=require("./src/app")
const port=3000




app.listen(port,()=>{
    console.log(`server is up and running on port: http://localhost:${port}`)
})