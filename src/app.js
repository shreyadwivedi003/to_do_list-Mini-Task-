const express=require("express") //creating the server

const app=express();
app.use(express.json())  //using middleware that makes recieved data readable for express

const notes=[]

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"note created successfully"
    })
})



app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"Notes fetched successfully",
        notes: notes
    })
})


app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index
    delete notes[index]
    res.status(200).json({
        message:"Note deleted successfully"
    })
})



app.patch('/notes/:index',(req,res)=>{
    const index=req.params.index
    const title=req.body.title
    const description=req.body.description
    notes[index].title=title
    notes[index].description=description

    res.status(200).json({
        message:"note updated successfully"
    })
})



module.exports=app