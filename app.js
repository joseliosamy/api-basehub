const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
})

app.get('/', (req, res)=>{
    res.json([
        {
            cardHeader:{
                title: "Form Login"
            },
            cardBody:{
                cardImage: "https",
                imageAlt: "Form Login",
                descrip: "Um formulário com inputs no estilo da Google.",
                hrefProject: "../projetos"
            }
        }
    ])
})

app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})
