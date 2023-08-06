const express=require("express")
require("dotenv").config()
const cors=require("cors")
const { Configuration, OpenAIApi } = require("openai");

const app=express()
app.use(cors())

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(express.json())

app.post("/shayari",async(req,res)=>{
    try {
        const word=req.body.box;
        const response= await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages:[{
                role: "user",
                content: `By using ${word} please make a Shayari of 2 to 3 line maximum`,
              }],
              max_tokens: 100,
              temperature: 0
        })
        const outputMessage = response.data.choices[0].message.content;
      res.status(200).json({data:outputMessage});
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})


app.listen(process.env.port,()=>{
    try {
        console.log(`Server is running at port ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})